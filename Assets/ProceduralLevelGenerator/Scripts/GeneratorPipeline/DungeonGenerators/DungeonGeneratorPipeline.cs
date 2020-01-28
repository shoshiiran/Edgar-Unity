﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Assets.ProceduralLevelGenerator.Scripts.Data.Graphs;
using Assets.ProceduralLevelGenerator.Scripts.GeneratorPipeline.Payloads.Interfaces;
using Assets.ProceduralLevelGenerator.Scripts.GeneratorPipeline.Payloads.PayloadInitializers;
using Assets.ProceduralLevelGenerator.Scripts.GeneratorPipeline.PrecomputedLevels;
using Assets.ProceduralLevelGenerator.Scripts.Pipeline;
using Assets.ProceduralLevelGenerator.Scripts.Utils;
using MapGeneration.Benchmarks;
using MapGeneration.Benchmarks.ResultSaving;
using MapGeneration.Interfaces.Benchmarks;
using MapGeneration.MetaOptimization.Evolution.DungeonGeneratorEvolution;
using MapGeneration.Utils.MapDrawing;
using UnityEngine;
using Debug = UnityEngine.Debug;

namespace Assets.ProceduralLevelGenerator.Scripts.GeneratorPipeline.DungeonGenerators
{
    /// <summary>
    ///     MonoBehaviour script that holds the whole generator pipeline.
    /// </summary>
    public class DungeonGeneratorPipeline : MonoBehaviour
    {
        [HideInInspector]
        public bool IsPrecomputeRunning;

        public int LevelsToPrecompute = 20;

        [ExpandableNotFoldable]
        public AbstractPayloadInitializer PayloadInitializer;

        [HideInInspector]
        [ExpandableNotFoldable]
        public List<PipelineItem> PipelineItems;

        public AbstractPrecomputedLevelsHandler PrecomputedLevelsHandler;

        [HideInInspector]
        public int PrecomputeProgress;

        public void Generate()
        {
            var stopwatch = new Stopwatch();
            stopwatch.Start();
            Debug.Log("--- Pipeline started ---");

            var pipelineRunner = new PipelineRunner();
            pipelineRunner.Run(PipelineItems, PayloadInitializer.InitializePayload());

            Debug.Log($"--- Pipeline completed. {stopwatch.ElapsedMilliseconds / 1000f:F} s ---");
        }

        public void PrecomputeLevels()
        {
            Debug.Log("Precompute levels");
            StartCoroutine(PrecomputeLevelsCoroutine());
        }

        private IEnumerator PrecomputeLevelsCoroutine()
        {
            var payloads = new List<object>();
            var pipelineRunner = new PipelineRunner();
            IsPrecomputeRunning = true;

            PrecomputedLevelsHandler.OnComputationStarted();

            for (var i = 0; i < LevelsToPrecompute; i++)
            {
                var payload = PayloadInitializer.InitializePayload();
                pipelineRunner.Run(PipelineItems, payload);

                PrecomputedLevelsHandler.SaveLevel(payload);
                PrecomputeProgress = i + 1;
                yield return null;
            }

            // TODO: check if not null
            PrecomputedLevelsHandler.OnComputationEnded();
        }
    }
}