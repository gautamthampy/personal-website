import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    "Returns Gautam Thampy's technical skills. Use when users ask about skills, technologies, or technical background.",
  parameters: z.object({}),
  execute: async () => ({
    skills: {
      languages: ['Python', 'Golang', 'Java', 'TypeScript', 'JavaScript', 'C', 'C++', 'SQL', 'Bash'],
      ai_genai: ['LangChain', 'LlamaIndex', 'Vertex AI', 'GPT-4', 'Llama 3', 'LoRA / PEFT', 'HuggingFace', 'RAG', 'Semantic Kernel'],
      cloud_devops: ['GCP', 'AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Kafka', 'GitHub Actions', 'Argo'],
      databases: ['PostgreSQL', 'Redis', 'MongoDB', 'BigQuery', 'DynamoDB', 'Elasticsearch', 'MySQL', 'ChromaDB', 'FAISS'],
      backend: ['Spring Boot', 'gRPC', 'REST APIs', 'Microservices', 'GraphQL', 'BullMQ'],
      ml_frameworks: ['PyTorch', 'TensorFlow', 'HuggingFace', 'PEFT'],
      embedded: ['FreeRTOS', 'ESP32', 'ARM Cortex-M', 'MQTT', 'BLE', 'I2C / SPI / UART'],
      certifications: [
        'GCP Professional Data Engineer',
        'GCP Professional Network Engineer',
        'GCP Associate Cloud Engineer',
        'HashiCorp Terraform Associate',
      ],
    },
  }),
});
