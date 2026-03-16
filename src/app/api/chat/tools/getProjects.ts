import { tool } from 'ai';
import { z } from 'zod';

export const getProjects = tool({
  description:
    "Returns Gautam Thampy's key projects. Use when users ask about projects, portfolio work, or technical achievements.",
  parameters: z.object({}),
  execute: async () => ({
    projects: [
      {
        name: 'SmartAuditAI',
        description: 'AI smart contract analyzer using RAG with Azure AI Search and LangChain over 100+ blockchain audit reports — 60% less manual review time',
        technologies: ['Python', 'Azure AI Search', 'LangChain', 'Semantic Kernel', 'RAG'],
        year: '2025',
      },
      {
        name: 'InventorySync',
        description: 'Redis-backed BullMQ sync engine with normalized PostgreSQL schema — priority queues, rate limiting, configurable batch scheduling',
        technologies: ['Node.js', 'PostgreSQL', 'Redis', 'BullMQ', 'TypeScript'],
        year: '2025',
      },
      {
        name: 'Smart Bike Lock',
        description: 'Tamper detection on ESP32-S3 with FreeRTOS/MPU6050, MQTT to AWS IoT Core/DynamoDB, BLE Wi-Fi provisioning — 45% better setup success',
        technologies: ['ESP32', 'FreeRTOS', 'AWS IoT', 'MQTT', 'BLE', 'DynamoDB'],
        year: '2025',
      },
      {
        name: 'LLaMA3 News Summarizer',
        description: 'Fine-tuned LLaMA3 on CNN/DailyMail using PEFT/LoRA — ROUGE-L 34, 40% GPU memory reduction, 10% better than baselines',
        technologies: ['Python', 'PyTorch', 'LLaMA3', 'LoRA', 'PEFT', 'HuggingFace'],
        year: '2024',
      },
      {
        name: 'SurfStore',
        description: 'Fault-tolerant distributed file storage in Golang syncing files across devices using RAFT consensus, Consistent Hashing, and gRPC',
        technologies: ['Golang', 'gRPC', 'RAFT', 'Consistent Hashing'],
        year: '2024',
      },
      {
        name: 'QuizMaster',
        description: 'Serverless quiz app on AWS Lambda/DynamoDB with LLM-powered RAG quiz generation from PDFs — 40% infrastructure cost reduction',
        technologies: ['React', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'RAG'],
        year: '2024',
      },
    ],
  }),
});
