import {
  Shield,
  Users,
  DollarSign,
  Server,
  HeadphonesIcon,
  type LucideIcon,
} from "lucide-react"

interface Feature {
  icon: LucideIcon
  title: string
  pro: {
    bullets: string[]
    costNote?: string
  }
  enterprise: {
    bullets: string[]
    costNote?: string
  }
}

const features: Feature[] = [
  {
    icon: Shield,
    title: "Security & Compliance",
    pro: {
      bullets: [
        "Up to 40 custom WAF rules, 100 IP blocks",
        "No OWASP managed rulesets",
        "No audit logs or SIEM integration",
        "HIPAA BAA as add-on ($350/mo)",
        "No project-level RBAC",
      ],
      costNote: "+$350/mo if HIPAA needed",
    },
    enterprise: {
      bullets: [
        "1,000 custom WAF rules, 1,000 IP blocks",
        "OWASP Core Ruleset (managed, auto-updated)",
        "Full audit logs with SIEM export",
        "HIPAA BAA included",
        "Project-level RBAC with guest controls",
      ],
      costNote: "All included",
    },
  },
  {
    icon: DollarSign,
    title: "Pro Add-Ons vs. Enterprise",
    pro: {
      bullets: [
        "Base: $20/user/mo (4 seats = $960/yr)",
        "SAML SSO: +$300/mo ($3,600/yr)",
        "HIPAA BAA: +$350/mo ($4,200/yr)",
        "Web Analytics Plus: +$10/mo ($120/yr)",
        "Speed Insights: +$10/mo per project",
      ],
    },
    enterprise: {
      bullets: [
        "SSO, HIPAA, analytics all included",
        "Dedicated infrastructure",
        "Predictable annual cost: $19,800-$21,000/yr",
      ],
    },
  },
  {
    icon: Server,
    title: "Infrastructure Reliability",
    pro: {
      bullets: [
        "No uptime SLA",
        "Single-region compute",
        "No automatic failover",
        "Up to 25 system bypass rules",
      ],
    },
    enterprise: {
      bullets: [
        "99.99% uptime SLA (under 53 minutes downtime/yr)",
        "Multi-region compute with automatic failover",
        "Up to 100 system bypass rules",
        "Custom infrastructure limits",
      ],
    },
  },
  {
    icon: Users,
    title: "Team Management at Scale",
    pro: {
      bullets: [
        "Unlimited free viewer seats",
        "Deploying members at $20/mo each",
        "No SCIM or directory sync",
        "No project-level RBAC",
        "SSO requires $300/mo add-on",
      ],
    },
    enterprise: {
      bullets: [
        "SCIM & Directory Sync (auto-provision from IdP)",
        "Project-level role-based access control",
        "Guest and team access controls",
        "SAML SSO included",
        "Automated user lifecycle management",
      ],
    },
  },
  {
    icon: HeadphonesIcon,
    title: "Support & Incident Response",
    pro: {
      bullets: [
        "Community and documentation support",
        "No guaranteed response time",
        "No dedicated point of contact",
        "No SLA",
      ],
    },
    enterprise: {
      bullets: [
        "Support with contractual SLA",
        "Dedicated Customer Success Manager",
        "Priority incident routing",
        "99.99% uptime SLA with enforcement",
      ],
    },
  },
]

interface FeatureSlideProps {
  featureIndex: number
}

export function FeatureSlide({ featureIndex }: FeatureSlideProps) {
  const feature = features[featureIndex]

  if (!feature) return null

  const Icon = feature.icon

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {feature.title}
        </h1>
      </div>

      {/* Two-column comparison */}
      <div className="grid md:grid-cols-2 gap-5">
        {/* Pro Card */}
        <div className="bg-card border border-border rounded-xl p-5 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-foreground text-sm font-medium">
              Pro
            </span>
            {feature.pro.costNote && (
              <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
                {feature.pro.costNote}
              </span>
            )}
          </div>

          <ul className="space-y-2 flex-1">
            {feature.pro.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <span className="text-muted-foreground mt-1 shrink-0">-</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Enterprise Card */}
        <div className="bg-card border border-primary/30 rounded-xl p-5 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30">
                Enterprise
              </span>
              {feature.enterprise.costNote && (
                <span className="text-xs text-primary/70 bg-primary/10 px-2 py-0.5 rounded-full">
                  {feature.enterprise.costNote}
                </span>
              )}
            </div>

            <ul className="space-y-2 flex-1">
              {feature.enterprise.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-primary mt-1 shrink-0">-</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export const totalFeatures = features.length
