export const personalInfo = {
  name: 'Gautam Thampy',
  title: 'Software Engineer',
  tagline: 'Building production systems at the intersection of cloud infrastructure and applied AI.',
  location: 'San Jose, CA',
  email: 'thampygautam@gmail.com',
  linkedin: 'https://linkedin.com/in/gthampy',
  github: 'https://github.com/gautamthampy',
  bio: [
    "I'm a Computer Engineering graduate student at San Jose State University with 2+ years of industry experience shipping cloud infrastructure and backend systems. I've built everything from GKE-based microservices pipelines at a Google Cloud partner to production RAG search systems at Sandisk.",
    "My work sits at the intersection of cloud engineering, distributed systems, and generative AI — I care about building things that are fast, reliable, and actually solve problems. I'm currently open to SWE internship and full-time opportunities.",
  ],
};

export const education = [
  {
    degree: 'M.S. Computer Engineering — GPA 3.77/4.0',
    school: 'San Jose State University',
    period: 'Aug 2024 – May 2026',
    location: 'San Jose, CA',
  },
  {
    degree: 'B.Tech Electronics & Communication Engineering — GPA 9.13/10',
    school: 'APJ Abdul Kalam Technological University',
    period: 'Jul 2018 – May 2022',
    location: 'Kerala, India',
  },
];

export const experiences = [
  {
    company: 'Sandisk',
    role: 'Failure Analysis Engineering Intern — Gen AI',
    period: 'Aug 2025 – Present',
    location: 'Milpitas, CA',
    highlights: [
      'Deployed a production RAG-based semantic search system on PostgreSQL/AWS RDS, integrating millions of SQL and Jira records to accelerate failure analysis resolution by 30%',
      'Engineered scalable data ingestion and embedding pipelines for CVD records with automated schema validation and AWS RDS synchronization',
      'Integrated S3-based caching and ETL layers for model retraining and historical fault analysis',
      'Delivered as an on-prem Windows tool with .bat scripts for automated environment setup, scheduled data refresh, and repeatable log collection',
      'Partnered with FAEs to drive analysis and replication using an LLM-powered log analysis workflow',
    ],
    tech: ['Python', 'PostgreSQL', 'AWS RDS', 'S3', 'RAG', 'LLMs', 'ETL'],
  },
  {
    company: 'San Jose State University',
    role: 'Graduate Research Assistant',
    period: 'Oct 2024 – Aug 2025',
    location: 'San Jose, CA',
    highlights: [
      'Developed a secure, access-aware document retrieval system using Google Vertex AI, LlamaIndex, and LangChain to enhance cloud storage security and data summarization',
      'Presented research at the Great Minds in STEM (GMis) 2024 and SVCC 2025 conferences',
    ],
    tech: ['Vertex AI', 'LlamaIndex', 'LangChain', 'Python', 'GCP'],
  },
  {
    company: 'SADA, An Insight Company',
    role: 'Software Engineer',
    period: 'Jul 2022 – Jul 2024',
    location: 'Trivandrum, India',
    highlights: [
      'Containerized Spring Boot microservices with Angular UIs into a Jenkins-driven GitOps Helm flow with HPA, cutting onboarding latency by 25% and scaling cleanly to 500+ users',
      'Automated GKE clusters, VPCs, and IAM with Terraform modules, cutting environment spin-up time by 50%',
      'Built a real-time GCP analytics pipeline using Kafka, BigQuery, and Elasticsearch to process large-scale retail telemetry data',
      'Engineered a RAG system using Google Vertex AI LLMs, reducing average support resolution time from 15 minutes to under 5 minutes',
      'Expedited lift-and-shift microservices migrations from AWS and Azure to GKE, retiring 30+ VMs via Terraform and Cloud Build',
      'Implemented an Argo Workflow using NannyML, Kubernetes, and AWS SQS to track ML model drift, cutting detection-to-mitigation time by 40%',
    ],
    tech: ['GCP', 'Kubernetes', 'Terraform', 'Jenkins', 'Kafka', 'BigQuery', 'Spring Boot', 'Vertex AI'],
  },
];

export const projects = [
  {
    title: 'SmartAuditAI',
    tagline: 'AI-powered smart contract risk analysis',
    description:
      'Built an AI smart contract analyzer using RAG with Azure AI Search and LangChain, enabling natural language risk assessment over 100+ blockchain audit reports and reducing manual review time by 60%. Integrated Semantic Kernel agents for NER, classification, and interactive querying.',
    tech: ['Python', 'Azure AI Search', 'LangChain', 'Semantic Kernel', 'RAG'],
    category: 'AI / Blockchain',
    year: '2025',
    featured: true,
    github: 'https://github.com/gautamthampy',
  },
  {
    title: 'InventorySync',
    tagline: 'Redis-backed distributed sync engine',
    description:
      'Architected a normalized PostgreSQL schema with cascade deletes and compound indexes for sub-second query performance on high-volume operations. Engineered a Redis-backed BullMQ synchronization system with priority queues, rate limiting, and configurable batch scheduling.',
    tech: ['Node.js', 'PostgreSQL', 'Redis', 'BullMQ', 'TypeScript'],
    category: 'Backend Infrastructure',
    year: '2025',
    featured: true,
    github: 'https://github.com/gautamthampy',
  },
  {
    title: 'Smart Bike Lock',
    tagline: 'IoT tamper detection on ESP32',
    description:
      'Tamper detection system on ESP32-S3 using FreeRTOS and MPU6050, routing real-time MQTT telemetry to AWS IoT Core and DynamoDB. Wi-Fi provisioning via BLE improved setup success by 45% and cut connectivity downtime by 60%.',
    tech: ['ESP32', 'FreeRTOS', 'AWS IoT', 'MQTT', 'BLE', 'DynamoDB'],
    category: 'Embedded / IoT',
    year: '2025',
    featured: false,
    github: 'https://github.com/gautamthampy',
  },
  {
    title: 'LLaMA3 News Summarizer',
    tagline: 'PEFT fine-tuning, ROUGE-L 34',
    description:
      'Fine-tuned LLaMA3 on CNN/DailyMail using PEFT with LoRA, reducing GPU memory usage by 40% while achieving a ROUGE-L score of 34 — outperforming baselines by 10% in coherence and conciseness.',
    tech: ['Python', 'PyTorch', 'LLaMA3', 'LoRA', 'PEFT', 'HuggingFace'],
    category: 'Machine Learning',
    year: '2024',
    featured: false,
    github: 'https://github.com/gautamthampy',
  },
  {
    title: 'SurfStore',
    tagline: 'Fault-tolerant distributed file storage',
    description:
      'Fault-tolerant file storage service in Golang that syncs files across devices using Consistent Hashing, RAFT consensus, and gRPC — built as part of a distributed systems course at SJSU.',
    tech: ['Golang', 'gRPC', 'RAFT', 'Consistent Hashing'],
    category: 'Distributed Systems',
    year: '2024',
    featured: false,
    github: 'https://github.com/gautamthampy',
  },
  {
    title: 'QuizMaster',
    tagline: 'Serverless LLM quiz generation',
    description:
      'Serverless web app using ReactJS, AWS Lambda, API Gateway, and DynamoDB, reducing backend costs by 40% and improving deploy speed by 50%. LLM-powered RAG pipeline generates tailored quizzes from user-uploaded PDFs.',
    tech: ['React', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'RAG'],
    category: 'Full-Stack / AI',
    year: '2024',
    featured: false,
    github: 'https://github.com/gautamthampy',
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Golang', 'Java', 'TypeScript', 'JavaScript', 'C', 'C++', 'SQL', 'Bash'],
  },
  {
    category: 'AI & GenAI',
    items: ['LangChain', 'LlamaIndex', 'Vertex AI', 'GPT-4', 'Llama 3', 'LoRA / PEFT', 'HuggingFace', 'RAG'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['GCP', 'AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Kafka', 'GitHub Actions'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'Redis', 'MongoDB', 'BigQuery', 'DynamoDB', 'Elasticsearch', 'MySQL'],
  },
  {
    category: 'Backend',
    items: ['Spring Boot', 'gRPC', 'REST APIs', 'Microservices', 'GraphQL', 'BullMQ'],
  },
  {
    category: 'ML Frameworks',
    items: ['PyTorch', 'TensorFlow', 'ChromaDB', 'FAISS', 'Pinecone', 'Semantic Kernel'],
  },
  {
    category: 'Embedded & Hardware',
    items: ['FreeRTOS', 'ESP32', 'ARM Cortex-M', 'MQTT', 'BLE', 'I2C / SPI / UART', 'CAN Bus'],
  },
  {
    category: 'Certifications',
    items: ['GCP Professional Data Engineer', 'GCP Professional Network Engineer', 'GCP Associate Cloud Engineer', 'HashiCorp Terraform Associate'],
  },
];

export const achievements = [
  {
    title: 'IEEE MGA Darrel Chong Award',
    description: 'Won amongst 3,600+ IEEE student branches worldwide as Branch Chair',
  },
  {
    title: 'IEEE MGA Exemplary Student Branch Award',
    description: 'Recognized as an exemplary branch among 3,600+ global IEEE student branches',
  },
  {
    title: 'IEEE SIGHT Group Founder',
    description: 'Founded an IEEE SIGHT group providing coding classes to 50+ underprivileged children',
  },
];
