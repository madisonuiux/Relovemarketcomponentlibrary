import { useState } from "react";
import { DSButton } from "./components/ds-button";
import { DSInput } from "./components/ds-input";
import { DSBadge } from "./components/ds-badge";
import { DSCard, DSCardHeader, DSCardTitle, DSCardDescription, DSCardContent, DSCardFooter } from "./components/ds-card";
import { DSAlert, DSAlertTitle, DSAlertDescription } from "./components/ds-alert";
import { DSAvatar } from "./components/ds-avatar";
import { DSCheckbox } from "./components/ds-checkbox";
import { DSSwitch } from "./components/ds-switch";
import { DSRadio } from "./components/ds-radio";
import { DSTextarea } from "./components/ds-textarea";
import { DSSelect } from "./components/ds-select";
import { DSProgress } from "./components/ds-progress";
import { DSSpinner } from "./components/ds-spinner";
import { DSSkeleton } from "./components/ds-skeleton";
import { Copy, Check } from "lucide-react";

function App() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const copyToClipboard = (text: string, token: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const ColorSwatch = ({ color, name, varName }: { color: string; name: string; varName: string }) => (
    <div className="flex flex-col gap-2">
      <div
        className="h-20 rounded-[var(--radius)] border border-border shadow-sm"
        style={{ backgroundColor: color }}
      />
      <div className="text-sm">
        <div className="font-medium">{name}</div>
        <button
          onClick={() => copyToClipboard(color, varName)}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {color}
          {copiedToken === varName ? (
            <Check className="h-3 w-3 text-success" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
        </button>
      </div>
    </div>
  );

  const TokenRow = ({ name, value, variable }: { name: string; value: string; variable: string }) => (
    <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
      <div className="flex-1">
        <div className="font-medium text-sm">{name}</div>
        <button
          onClick={() => copyToClipboard(variable, variable)}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mt-0.5"
        >
          {variable}
          {copiedToken === variable ? (
            <Check className="h-3 w-3 text-success" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
        </button>
      </div>
      <div className="text-sm text-muted-foreground font-mono">{value}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Design System</h1>
              <p className="text-muted-foreground">
                A comprehensive Tailwind-based component library
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-[var(--radius)] bg-primary" />
              <div className="h-12 w-12 rounded-[var(--radius)]" style={{ backgroundColor: 'var(--secondary-500)' }} />
              <div>
                <div className="font-medium">Brand Colors</div>
                <div className="text-sm text-muted-foreground">Blue & Purple</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Design Tokens Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Design Tokens</h2>
          
          <div className="grid gap-8">
            {/* Primary Color Palette */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Primary Color Palette - Blue</DSCardTitle>
                <DSCardDescription>Primary brand colors based on #3153fa</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <ColorSwatch color="var(--primary-50)" name="Primary 50" varName="--primary-50" />
                  <ColorSwatch color="var(--primary-100)" name="Primary 100" varName="--primary-100" />
                  <ColorSwatch color="var(--primary-200)" name="Primary 200" varName="--primary-200" />
                  <ColorSwatch color="var(--primary-300)" name="Primary 300" varName="--primary-300" />
                  <ColorSwatch color="var(--primary-400)" name="Primary 400" varName="--primary-400" />
                  <ColorSwatch color="var(--primary-500)" name="Primary 500" varName="--primary-500" />
                  <ColorSwatch color="var(--primary-600)" name="Primary 600" varName="--primary-600" />
                  <ColorSwatch color="var(--primary-700)" name="Primary 700" varName="--primary-700" />
                  <ColorSwatch color="var(--primary-800)" name="Primary 800" varName="--primary-800" />
                  <ColorSwatch color="var(--primary-900)" name="Primary 900" varName="--primary-900" />
                </div>
              </DSCardContent>
            </DSCard>

            {/* Secondary Color Palette */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Secondary Color Palette - Purple</DSCardTitle>
                <DSCardDescription>Complementary purple shades for accent and variety</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <ColorSwatch color="var(--secondary-50)" name="Secondary 50" varName="--secondary-50" />
                  <ColorSwatch color="var(--secondary-100)" name="Secondary 100" varName="--secondary-100" />
                  <ColorSwatch color="var(--secondary-200)" name="Secondary 200" varName="--secondary-200" />
                  <ColorSwatch color="var(--secondary-300)" name="Secondary 300" varName="--secondary-300" />
                  <ColorSwatch color="var(--secondary-400)" name="Secondary 400" varName="--secondary-400" />
                  <ColorSwatch color="var(--secondary-500)" name="Secondary 500" varName="--secondary-500" />
                  <ColorSwatch color="var(--secondary-600)" name="Secondary 600" varName="--secondary-600" />
                  <ColorSwatch color="var(--secondary-700)" name="Secondary 700" varName="--secondary-700" />
                  <ColorSwatch color="var(--secondary-800)" name="Secondary 800" varName="--secondary-800" />
                  <ColorSwatch color="var(--secondary-900)" name="Secondary 900" varName="--secondary-900" />
                </div>
              </DSCardContent>
            </DSCard>

            {/* Neutral Colors */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Neutral Colors</DSCardTitle>
                <DSCardDescription>Neutral color scale for text and backgrounds</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <ColorSwatch color="var(--neutral-50)" name="Neutral 50" varName="--neutral-50" />
                  <ColorSwatch color="var(--neutral-100)" name="Neutral 100" varName="--neutral-100" />
                  <ColorSwatch color="var(--neutral-200)" name="Neutral 200" varName="--neutral-200" />
                  <ColorSwatch color="var(--neutral-300)" name="Neutral 300" varName="--neutral-300" />
                  <ColorSwatch color="var(--neutral-400)" name="Neutral 400" varName="--neutral-400" />
                  <ColorSwatch color="var(--neutral-500)" name="Neutral 500" varName="--neutral-500" />
                  <ColorSwatch color="var(--neutral-600)" name="Neutral 600" varName="--neutral-600" />
                  <ColorSwatch color="var(--neutral-700)" name="Neutral 700" varName="--neutral-700" />
                  <ColorSwatch color="var(--neutral-800)" name="Neutral 800" varName="--neutral-800" />
                  <ColorSwatch color="var(--neutral-900)" name="Neutral 900" varName="--neutral-900" />
                </div>
              </DSCardContent>
            </DSCard>

            {/* Color Combinations */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Color Combinations</DSCardTitle>
                <DSCardDescription>Examples of primary and secondary colors working together</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="text-sm font-medium mb-2">Buttons</div>
                    <div className="flex flex-wrap gap-2">
                      <button className="px-4 py-2 rounded-[var(--radius)] bg-primary text-white font-medium">Primary Blue</button>
                      <button className="px-4 py-2 rounded-[var(--radius)] text-white font-medium" style={{ backgroundColor: 'var(--secondary-500)' }}>Secondary Purple</button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm font-medium mb-2">Badges</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary text-white text-sm font-medium">Blue Badge</span>
                      <span className="px-3 py-1 rounded-full text-white text-sm font-medium" style={{ backgroundColor: 'var(--secondary-500)' }}>Purple Badge</span>
                      <span className="px-3 py-1 rounded-full border-2 text-sm font-medium" style={{ borderColor: 'var(--primary-500)', color: 'var(--primary-500)' }}>Blue Outline</span>
                      <span className="px-3 py-1 rounded-full border-2 text-sm font-medium" style={{ borderColor: 'var(--secondary-500)', color: 'var(--secondary-500)' }}>Purple Outline</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm font-medium mb-2">Gradient</div>
                    <div className="h-20 rounded-[var(--radius)] shadow-sm" style={{ background: 'linear-gradient(135deg, var(--primary-500) 0%, var(--secondary-500) 100%)' }} />
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm font-medium mb-2">Complementary Backgrounds</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 rounded-[var(--radius)] flex items-center justify-center text-sm font-medium" style={{ backgroundColor: 'var(--primary-50)', color: 'var(--primary-700)' }}>Blue Light</div>
                      <div className="h-16 rounded-[var(--radius)] flex items-center justify-center text-sm font-medium" style={{ backgroundColor: 'var(--secondary-50)', color: 'var(--secondary-700)' }}>Purple Light</div>
                    </div>
                  </div>
                </div>
              </DSCardContent>
            </DSCard>

            {/* Semantic Colors */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Semantic Colors</DSCardTitle>
                <DSCardDescription>Colors for success, warning, error, and info states</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <ColorSwatch color="var(--success)" name="Success" varName="--success" />
                  <ColorSwatch color="var(--warning)" name="Warning" varName="--warning" />
                  <ColorSwatch color="var(--error)" name="Error" varName="--error" />
                  <ColorSwatch color="var(--info)" name="Info" varName="--info" />
                </div>
              </DSCardContent>
            </DSCard>

            {/* Spacing */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Spacing Scale</DSCardTitle>
                <DSCardDescription>Consistent spacing tokens for layouts</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="space-y-1">
                  <TokenRow name="Extra Small" value="0.25rem (4px)" variable="--spacing-xs" />
                  <TokenRow name="Small" value="0.5rem (8px)" variable="--spacing-sm" />
                  <TokenRow name="Medium" value="1rem (16px)" variable="--spacing-md" />
                  <TokenRow name="Large" value="1.5rem (24px)" variable="--spacing-lg" />
                  <TokenRow name="Extra Large" value="2rem (32px)" variable="--spacing-xl" />
                  <TokenRow name="2X Large" value="3rem (48px)" variable="--spacing-2xl" />
                </div>
              </DSCardContent>
            </DSCard>

            {/* Border Radius */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Border Radius</DSCardTitle>
                <DSCardDescription>Rounded corner values</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="space-y-1">
                  <TokenRow name="Base Radius" value="0.5rem (8px)" variable="--radius" />
                  <TokenRow name="Small" value="calc(--radius - 4px)" variable="--radius-sm" />
                  <TokenRow name="Medium" value="calc(--radius - 2px)" variable="--radius-md" />
                  <TokenRow name="Large" value="--radius" variable="--radius-lg" />
                  <TokenRow name="Extra Large" value="calc(--radius + 4px)" variable="--radius-xl" />
                </div>
              </DSCardContent>
            </DSCard>

            {/* Shadows */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Shadow System</DSCardTitle>
                <DSCardDescription>Elevation and depth through shadows</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="h-20 rounded-[var(--radius)] bg-card border border-border" style={{ boxShadow: "var(--shadow-sm)" }} />
                    <div className="text-sm font-medium">Small</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="h-20 rounded-[var(--radius)] bg-card border border-border" style={{ boxShadow: "var(--shadow-md)" }} />
                    <div className="text-sm font-medium">Medium</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="h-20 rounded-[var(--radius)] bg-card border border-border" style={{ boxShadow: "var(--shadow-lg)" }} />
                    <div className="text-sm font-medium">Large</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="h-20 rounded-[var(--radius)] bg-card border border-border" style={{ boxShadow: "var(--shadow-xl)" }} />
                    <div className="text-sm font-medium">Extra Large</div>
                  </div>
                </div>
              </DSCardContent>
            </DSCard>
          </div>
        </section>

        {/* Components Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Components</h2>

          <div className="grid gap-8">
            {/* Buttons */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Buttons</DSCardTitle>
                <DSCardDescription>Button variants and sizes</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium mb-3">Variants</h4>
                    <div className="flex flex-wrap gap-3">
                      <DSButton variant="primary">Primary Blue</DSButton>
                      <button className="inline-flex items-center justify-center gap-2 rounded-[var(--radius)] font-medium transition-colors h-10 px-4 text-white" style={{ backgroundColor: 'var(--secondary-500)' }}>Secondary Purple</button>
                      <DSButton variant="secondary">Neutral</DSButton>
                      <DSButton variant="outline">Outline</DSButton>
                      <DSButton variant="ghost">Ghost</DSButton>
                      <DSButton variant="danger">Danger</DSButton>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-3">Sizes</h4>
                    <div className="flex flex-wrap items-center gap-3">
                      <DSButton size="sm">Small</DSButton>
                      <DSButton size="md">Medium</DSButton>
                      <DSButton size="lg">Large</DSButton>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-3">States</h4>
                    <div className="flex flex-wrap gap-3">
                      <DSButton>Default</DSButton>
                      <DSButton disabled>Disabled</DSButton>
                    </div>
                  </div>
                </div>
              </DSCardContent>
            </DSCard>

            {/* Inputs */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Inputs</DSCardTitle>
                <DSCardDescription>Form input components</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-sm font-medium mb-2">Text Input</label>
                    <DSInput placeholder="Enter text..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">With Error</label>
                    <DSInput placeholder="Invalid input" error />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Disabled</label>
                    <DSInput placeholder="Disabled input" disabled />
                  </div>
                </div>
              </DSCardContent>
            </DSCard>

            {/* Textarea */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Textarea</DSCardTitle>
                <DSCardDescription>Multi-line text input</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="space-y-4 max-w-md">
                  <DSTextarea placeholder="Enter your message..." rows={4} />
                  <DSTextarea placeholder="Error state" error rows={3} />
                </div>
              </DSCardContent>
            </DSCard>

            {/* Select */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Select</DSCardTitle>
                <DSCardDescription>Dropdown selection</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="space-y-4 max-w-md">
                  <DSSelect>
                    <option value="">Choose an option...</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </DSSelect>
                  <DSSelect error>
                    <option value="">Error state</option>
                  </DSSelect>
                </div>
              </DSCardContent>
            </DSCard>

            {/* Badges */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Badges</DSCardTitle>
                <DSCardDescription>Label and status indicators</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="flex flex-wrap gap-2">
                  <DSBadge variant="default">Default</DSBadge>
                  <DSBadge variant="primary">Primary Blue</DSBadge>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-white transition-colors" style={{ backgroundColor: 'var(--secondary-500)' }}>Secondary Purple</span>
                  <DSBadge variant="success">Success</DSBadge>
                  <DSBadge variant="warning">Warning</DSBadge>
                  <DSBadge variant="error">Error</DSBadge>
                  <DSBadge variant="outline">Outline</DSBadge>
                </div>
              </DSCardContent>
            </DSCard>

            {/* Alerts */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Alerts</DSCardTitle>
                <DSCardDescription>Notification and message components</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="space-y-4">
                  <DSAlert variant="default">
                    <DSAlertTitle>Default Alert</DSAlertTitle>
                    <DSAlertDescription>
                      This is a default alert message with some helpful information.
                    </DSAlertDescription>
                  </DSAlert>
                  <DSAlert variant="success">
                    <DSAlertTitle>Success</DSAlertTitle>
                    <DSAlertDescription>
                      Your changes have been saved successfully.
                    </DSAlertDescription>
                  </DSAlert>
                  <DSAlert variant="warning">
                    <DSAlertTitle>Warning</DSAlertTitle>
                    <DSAlertDescription>
                      Please review your input before continuing.
                    </DSAlertDescription>
                  </DSAlert>
                  <DSAlert variant="error">
                    <DSAlertTitle>Error</DSAlertTitle>
                    <DSAlertDescription>
                      An error occurred while processing your request.
                    </DSAlertDescription>
                  </DSAlert>
                  <DSAlert variant="info">
                    <DSAlertTitle>Info</DSAlertTitle>
                    <DSAlertDescription>
                      Here's some useful information about this feature.
                    </DSAlertDescription>
                  </DSAlert>
                </div>
              </DSCardContent>
            </DSCard>

            {/* Avatars */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Avatars</DSCardTitle>
                <DSCardDescription>User profile images with fallbacks</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-3">Sizes</h4>
                    <div className="flex items-center gap-3">
                      <DSAvatar size="sm" fallback="SM" />
                      <DSAvatar size="md" fallback="MD" />
                      <DSAvatar size="lg" fallback="LG" />
                      <DSAvatar size="xl" fallback="XL" />
                    </div>
                  </div>
                </div>
              </DSCardContent>
            </DSCard>

            {/* Checkboxes */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Checkboxes</DSCardTitle>
                <DSCardDescription>Multiple selection controls</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="space-y-3">
                  <DSCheckbox label="Option 1" defaultChecked />
                  <DSCheckbox label="Option 2" />
                  <DSCheckbox label="Disabled" disabled />
                  <DSCheckbox label="Disabled Checked" disabled defaultChecked />
                </div>
              </DSCardContent>
            </DSCard>

            {/* Radio Buttons */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Radio Buttons</DSCardTitle>
                <DSCardDescription>Single selection controls</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="space-y-3">
                  <DSRadio name="radio-group" label="Option 1" defaultChecked />
                  <DSRadio name="radio-group" label="Option 2" />
                  <DSRadio name="radio-group" label="Option 3" />
                  <DSRadio name="disabled" label="Disabled" disabled />
                </div>
              </DSCardContent>
            </DSCard>

            {/* Switches */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Switches</DSCardTitle>
                <DSCardDescription>Toggle controls</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="space-y-3">
                  <DSSwitch label="Enable notifications" defaultChecked />
                  <DSSwitch label="Auto-save" />
                  <DSSwitch label="Disabled" disabled />
                  <DSSwitch label="Disabled Checked" disabled defaultChecked />
                </div>
              </DSCardContent>
            </DSCard>

            {/* Progress */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Progress Bars</DSCardTitle>
                <DSCardDescription>Progress indicators</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Default</span>
                      <span className="text-muted-foreground">25%</span>
                    </div>
                    <DSProgress value={25} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Success</span>
                      <span className="text-muted-foreground">50%</span>
                    </div>
                    <DSProgress value={50} variant="success" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Warning</span>
                      <span className="text-muted-foreground">75%</span>
                    </div>
                    <DSProgress value={75} variant="warning" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Error</span>
                      <span className="text-muted-foreground">100%</span>
                    </div>
                    <DSProgress value={100} variant="error" />
                  </div>
                </div>
              </DSCardContent>
            </DSCard>

            {/* Spinners */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Spinners</DSCardTitle>
                <DSCardDescription>Loading indicators</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="flex items-center gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <DSSpinner size="sm" />
                    <span className="text-sm text-muted-foreground">Small</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <DSSpinner size="md" />
                    <span className="text-sm text-muted-foreground">Medium</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <DSSpinner size="lg" />
                    <span className="text-sm text-muted-foreground">Large</span>
                  </div>
                </div>
              </DSCardContent>
            </DSCard>

            {/* Skeletons */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Skeletons</DSCardTitle>
                <DSCardDescription>Loading placeholders</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <DSSkeleton className="h-4 w-full" />
                    <DSSkeleton className="h-4 w-3/4" />
                    <DSSkeleton className="h-4 w-1/2" />
                  </div>
                  <div className="flex items-center gap-4">
                    <DSSkeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <DSSkeleton className="h-4 w-full" />
                      <DSSkeleton className="h-4 w-2/3" />
                    </div>
                  </div>
                </div>
              </DSCardContent>
            </DSCard>

            {/* Cards */}
            <DSCard>
              <DSCardHeader>
                <DSCardTitle>Cards</DSCardTitle>
                <DSCardDescription>Container components with header, content, and footer</DSCardDescription>
              </DSCardHeader>
              <DSCardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <DSCard>
                    <DSCardHeader>
                      <DSCardTitle>Card Title</DSCardTitle>
                      <DSCardDescription>Card description goes here</DSCardDescription>
                    </DSCardHeader>
                    <DSCardContent>
                      <p className="text-sm">This is the card content area where you can place any content.</p>
                    </DSCardContent>
                    <DSCardFooter className="gap-2">
                      <DSButton variant="outline" size="sm">Cancel</DSButton>
                      <DSButton size="sm">Save</DSButton>
                    </DSCardFooter>
                  </DSCard>

                  <DSCard>
                    <DSCardHeader>
                      <DSCardTitle>Another Card</DSCardTitle>
                      <DSCardDescription>With different content</DSCardDescription>
                    </DSCardHeader>
                    <DSCardContent>
                      <div className="space-y-2">
                        <DSSkeleton className="h-4 w-full" />
                        <DSSkeleton className="h-4 w-4/5" />
                        <DSSkeleton className="h-4 w-3/5" />
                      </div>
                    </DSCardContent>
                  </DSCard>
                </div>
              </DSCardContent>
            </DSCard>
          </div>
        </section>

        {/* Usage Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Usage Example</h2>
          <DSCard>
            <DSCardHeader>
              <DSCardTitle>Complete Form Example</DSCardTitle>
              <DSCardDescription>A real-world example combining multiple components</DSCardDescription>
            </DSCardHeader>
            <DSCardContent>
              <form className="space-y-6 max-w-2xl">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <DSInput placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <DSInput placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <DSInput type="email" placeholder="john.doe@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Role</label>
                  <DSSelect>
                    <option value="">Select a role...</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                  </DSSelect>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  <DSTextarea placeholder="Tell us about yourself..." rows={4} />
                </div>

                <div className="space-y-3">
                  <DSCheckbox label="I agree to the terms and conditions" />
                  <DSCheckbox label="Subscribe to newsletter" />
                </div>

                <DSSwitch label="Enable notifications" defaultChecked />

                <DSAlert variant="info">
                  <DSAlertTitle>Pro Tip</DSAlertTitle>
                  <DSAlertDescription>
                    Make sure all required fields are filled out before submitting.
                  </DSAlertDescription>
                </DSAlert>

                <div className="flex gap-3">
                  <DSButton variant="outline">Cancel</DSButton>
                  <DSButton>Submit Form</DSButton>
                </div>
              </form>
            </DSCardContent>
          </DSCard>
        </section>
      </div>

      {/* Footer */}
      <div className="border-t border-border mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Design System built with Tailwind CSS v4
            </div>
            <div className="flex items-center gap-2">
              <DSBadge variant="primary">Primary: #3153fa</DSBadge>
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-white" style={{ backgroundColor: 'var(--secondary-500)' }}>Secondary: #7c3aed</span>
              <DSBadge variant="outline">v1.0.0</DSBadge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
