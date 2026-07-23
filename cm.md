# Technical Skills / Tech Stack

Full-stack enterprise software engineer with deep experience building and modernizing large-scale ERP, warehouse (WMS), shift/production-tracking and Manufacturing Execution Systems (MES) — spanning legacy Java EE monoliths through to modern Spring Boot, React, real-time streaming, and LLM/AI-powered applications.

---

## Languages
- **Java** (8 → 21), **Kotlin**
- **TypeScript** / **JavaScript** (ES6+, Node.js)
- **Python** (3.11)
- **SQL / PL-SQL**, **Groovy**, **Bash / Windows Batch**

## Backend & Frameworks
- **Spring Boot** (2.x, 3.3), **Spring Framework** (5.2), **Spring Modulith** (modular monolith)
- **Spring Data JPA**, **Spring JDBC**, **Spring Security** (OAuth2, **JWT**), **Spring WebFlux / WebClient**
- **Spring WebSocket / STOMP**, **Spring Actuator**, **Spring Scheduler / Quartz**, **Spring Retry / AOP**
- **Hibernate / JPA** (3.x → modern), **MapStruct**, **Project Lombok**
- **FastAPI**, **Uvicorn**, **Starlette**, **Pydantic**, **SQLAlchemy 2.0** (Python services)
- **Java EE / Jakarta EE**: **EJB 3.x**, **JSF 2.x**, **JBoss Seam**, **PrimeFaces** (+ Mobile), **RichFaces**, **Facelets**
- **Drools** (business rules engine), **jBPM** (workflow), **Apache Jackrabbit** (JCR)

## Frontend
- **React 19**, **Vite**, **React Router**, **TanStack Query**, **Zustand**
- **React Hook Form** + **Zod**, **Tailwind CSS**, **Headless UI**, **Heroicons**
- **AG Grid**, **Recharts**, **dhtmlx-gantt**, **i18next** (internationalization)
- **HTMX**, **Alpine.js**, **Tabler** (server-driven UI)
- Legacy web: **JSP**, **jQuery Mobile**, **GWT**, **Java Swing** desktop client via **Java Web Start (JNLP)**

## AI / LLM
- **RAG** (Retrieval-Augmented Generation) pipelines
- **FAISS** (vector search), **Sentence-Transformers** (multilingual embeddings), **PyTorch**, **NumPy**
- Multi-provider LLM routing: **Anthropic Claude API**, **OpenAI-compatible APIs**, **Google Gemini**, **Ollama** (local models)
- LLM fine-tuning datasets (Llama-format instruction data), prompt management

## Databases & Caching
- **Oracle Database** (primary), **PostgreSQL**, **SQLite**, **H2 / HSQLDB / Derby** (embedded)
- **Redis** (caching + pub/sub, via **Jedis**), **Ehcache** (Hibernate L2 cache)
- **HikariCP** connection pooling, versioned schema migrations (Flyway-style)

## Streaming, Messaging & Real-Time
- **Apache Flink** (real-time stream processing)
- **MQTT** (Eclipse Paho — industrial/IoT telemetry ingestion)
- **RabbitMQ**, **WebSockets** (Tyrus / STOMP — real-time client delivery)

## Integrations & Domain Libraries
- **SOAP / Apache Axis / JAX-RPC**, **REST**, **Springfox / springdoc OpenAPI (Swagger)**
- Turkish e-transformation: **e-Fatura (UBL 2.0)**, **e-Defter**, **e-İrsaliye**, **e-Beyanname**, **GİB**, bank integrations
- **Apache POI** (Excel), **JasperReports / iText / PDFBox** (PDF/reporting), **JFreeChart** (charting)
- **ZXing** (barcode/QR), **Firebase Admin SDK** (FCM push), **JavaMail**, digital signature (e-imza / PKCS#11)

## DevOps & Infrastructure
- **Docker** (multi-stage builds), **Docker Compose**, **Nginx**
- **Jenkins** & **Bamboo** (CI/CD pipelines), **Harbor** (private container registry)
- **Apache Maven** (multi-module reactor), **npm / Vite**, **Apache Ant**
- **Apache Tomcat**, **JBoss AS**, SSH/SFTP-based deployment (JSch)
- **Micrometer** → **Prometheus / StatsD**, **Spring Boot Admin** (observability)

## Practices
- Modular-monolith & multi-module architecture, layered/service-oriented design
- Multi-tenant / multi-product deployments, internationalization (TR/EN/DE/FR/BG)
- REST & SOAP API design, legacy-system modernization, containerization

---

## Selected Projects

| Project | Domain | Core Stack |
|---------|--------|-----------|
| **erp-plus** | Modern ERP platform | Java 21, Spring Boot 3.3, Spring Modulith, React 19 + Vite, Oracle/PostgreSQL, Docker, Claude AI integration |
| **erpLlm** | AI ERP assistant (RAG chatbot) | Python 3.11, FastAPI, FAISS, Sentence-Transformers, PyTorch, multi-LLM (Claude/OpenAI/Gemini/Ollama), Docker |
| **BilisimERP 4.0** | Enterprise ERP backend | Spring Boot 2.1 (multi-module), Oracle, Redis, OAuth2/JWT, RabbitMQ, WebSocket, Prometheus |
| **Bilisim ERP (erp-git)** | Enterprise ERP suite | Spring 5.2, Hibernate, Swing/Java Web Start client, PostgreSQL/Oracle, e-invoicing, Docker + Jenkins + Harbor |
| **MDepo** | Warehouse management (WMS) | Java EE (EAR), JBoss Seam, JSF/PrimeFaces Mobile, EJB, Drools, Oracle, JBoss AS |
| **MVardiya** | Shift / production tracking | Java EE (EAR), JSF 2.2/PrimeFaces Mobile, Spring, Hibernate, Drools/jBPM, Oracle, JBoss AS |
| **Bilisim MES** | Real-time Manufacturing Execution System | Apache Flink, MQTT (Paho), Redis pub/sub, WebSocket, Maven fat-jar |
