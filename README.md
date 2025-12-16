# Automate - Predictive Automotive Service

An autonomous, connected maintenance system that detects vehicle issues early, schedules service proactively, and feeds real-world service insights back to manufacturers to prevent repeat defects.


## Problem Statement

The automotive service ecosystem is largely reactive.  
Breakdowns are detected late, servicing is fragmented across channels, and learnings from recurring failures rarely reach manufacturing teams. This results in unplanned downtime, poor customer experience, and repeated defects in vehicle design and components.


## Solution Overview

This project builds a **predictive maintenance layer** that connects vehicles, customers, service centers, and OEMs into a single feedback-driven system.

The system:
- Detects anomalies from vehicle telemetry
- Scores failure risk using machine learning
- Proactively schedules service based on urgency and capacity
- Keeps customers informed throughout the service journey
- Converts post-service data into structured RCA/CAPA insights for OEMs

Every service event improves future predictions and decisions.


## Key Features

- **Real-time vehicle health monitoring**
- **Predictive fault scoring and time-to-breakdown estimation**
- **Automated workshop selection and slot booking**
- **Customer notifications via app and voice**
- **Service center demand and capacity visibility**
- **Closed-loop RCA/CAPA feedback to OEMs**
- **Continuous learning from field data**


## System Architecture (High Level)

The system is designed using a layered architecture:

1. **Actors Layer**  
   Vehicle / IoT device, Vehicle Owner, Service Center, OEM teams

2. **Experience Layer**  
   React-based dashboards for customers, workshops, and OEM analytics

3. **Access & API Layer**  
   Authentication, role separation, and API gateway

4. **Orchestration & Business Logic Layer**  
   Decision-making, scheduling logic, and background workers

5. **Intelligence Layer**  
   Fault scoring models and AI agents for recommendations and RCA

6. **Data & Storage Layer**  
   Operational data, service history, and feedback storage

7. **Integration & Notification Layer**  
   Real-time alerts, reminders, and external integrations


## User Journey (Simplified)

1. Vehicle sensor detects an anomaly  
2. System scores failure risk and urgency  
3. Recommended service action is generated  
4. Optimal workshop and slot are selected  
5. Customer is notified and service is booked  
6. Vehicle is serviced at workshop  
7. Post-service data is captured  
8. RCA/CAPA insights are generated  
9. Models and rules are updated for future cases


## Technology Stack

### Frontend
- **React.js** – Customer app, Service Center dashboard, OEM analytics

### Backend & APIs
- **Node.js + Express.js** – Core APIs and orchestration logic

### Data & Storage
- **PostgreSQL** – Vehicle data, service history, parts, RCA/CAPA records

### Machine Learning & AI
- **TensorFlow** – Fault scoring and time-to-breakdown prediction
- **LangChain + OpenAI** – Service recommendations and structured RCA/CAPA extraction

### IoT & Ingestion
- **AWS IoT Core** – Vehicle telemetry ingestion

### Background Processing
- **Node.js Workers (Bull/Cron)** – Scheduling, retries, periodic scoring

### Notifications
- **WebSockets / Push / Voice APIs** – Real-time customer and workshop updates


## Impact Metrics

- Reduction in unplanned downtime hours  
- Faster service turnaround time  
- Fewer repeat service cases  
- Improved customer satisfaction scores  
- Lower warranty claim rates  


## Implementation Approach

The solution is designed to integrate with existing vehicle telemetry and service systems using lightweight APIs. It can be piloted with minimal infrastructure changes and scaled incrementally across fleets, workshops, and regions.


## Scalability & Extensibility

- Modular service-oriented design
- Horizontal scaling for ingestion, APIs, and workers
- New vehicles, workshops, or regions can be added without system redesign
- Feedback loop continuously improves models and rules


## Contributors

- [@anjalichaturvedi](https://github.com/anjalichaturvedi/)
- [@vibhuchaudhary](https://github.com/vibhuchaudhary/) 


## Ouput


https://github.com/user-attachments/assets/3c5b5366-d520-477a-acd9-b4c0b276eb17




https://github.com/user-attachments/assets/7b9ac9e3-249f-469a-bd42-8decc0505ed8


https://github.com/user-attachments/assets/344e7880-88b6-4ef5-b7ca-72eba8384f99






