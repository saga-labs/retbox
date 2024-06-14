import { Agent } from "./agent"

export interface Objective {
    objective: string
    tasks: Task[]
    timeline: Timeline
    budget: Budget
    key_metrics: string[]
    team: Team
  }
  
  export interface Task {
    task: string
    description: string
  }
  
  export interface Timeline {
    start_date: string
    end_date: string
  }
  
  export interface Budget {
    total: number
    breakdown: Breakdown
  }
  
  export interface Breakdown {
    design: number
    marketing: number
    promotions: number
    analytics: number
    contingency: number
  }
  
  export interface Team {
    project_manager: Agent
    web_developer: Agent
    graphic_designer: Agent
    marketing_specialist: Agent
    analytics_expert: Agent
  }
  