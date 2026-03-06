import { useState } from "react";
import { Copy, Check, CheckCircle2, AlertTriangle, AlertCircle, Info } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Badge } from "./components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Checkbox } from "./components/ui/checkbox";
import { Switch } from "./components/ui/switch";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Label } from "./components/ui/label";
import { Progress } from "./components/ui/progress";
import { Skeleton } from "./components/ui/skeleton";
import { ChevronDown } from "lucide-react";

// Inline Spinner — no ui/ equivalent, preserved from DSSpinner
function Spinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" };
  const borders = { sm: "2px", md: "2px", lg: "3px" };
  return (
    <div
      className={`animate-spin rounded-full ${sizes[size]}`}
      style={{
        background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, var(--primary-500) 0%, var(--secondary-500) 100%) border-box`,
        border: `${borders[size]} solid transparent`,
        borderTopColor: "white",
      }}
    />
  );
}

// Inline NativeSelect — preserves native <select> UX (same as DSSelect)
function NativeSelect({ error, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { error?: boolean }) {
  return (
    <div className="relative">
      <select
        className={[
          "flex h-10 w-full appearance-none rounded-[var(--radius)] border border-border bg-input-background px-3 py-2 pr-10 text-foreground transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error ? "border-destructive focus-visible:ring-destructive" : "",
        ].join(" ")}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
    </div>
  );
}

// Colored progress bar for non-default variants
function ColoredProgress({ value, color }: { value: number; color: string }) {
  return (
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-primary/20">
      <div
        className="h-full transition-all duration-300"
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%`, backgroundColor: color }}
      />
    </div>
  );
}

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
              <div className="h-12 w-12 rounded-[var(--radius)]" style={{ backgroundColor: "var(--secondary-500)" }} />
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
            <Card>
              <CardHeader>
                <CardTitle>Primary Color Palette — Blue</CardTitle>
                <CardDescription>Primary brand colors based on #3153fa</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <ColorSwatch color="var(--primary-50)"  name="Primary 50"  varName="--primary-50"  />
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
              </CardContent>
            </Card>

            {/* Secondary Color Palette */}
            <Card>
              <CardHeader>
                <CardTitle>Secondary Color Palette — Purple</CardTitle>
                <CardDescription>Complementary purple shades for accent and variety</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <ColorSwatch color="var(--secondary-50)"  name="Secondary 50"  varName="--secondary-50"  />
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
              </CardContent>
            </Card>

            {/* Neutral Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Neutral Colors</CardTitle>
                <CardDescription>Neutral color scale for text and backgrounds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <ColorSwatch color="var(--neutral-50)"  name="Neutral 50"  varName="--neutral-50"  />
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
              </CardContent>
            </Card>

            {/* Color Combinations */}
            <Card>
              <CardHeader>
                <CardTitle>Color Combinations</CardTitle>
                <CardDescription>Examples of primary and secondary colors working together</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="text-sm font-medium mb-2">Buttons</div>
                    <div className="flex flex-wrap gap-2">
                      <Button>Primary Blue</Button>
                      <button
                        className="px-4 py-2 rounded-[var(--radius)] text-white font-medium"
                        style={{ backgroundColor: "var(--secondary-500)" }}
                      >
                        Secondary Purple
                      </button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm font-medium mb-2">Badges</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Blue Badge</Badge>
                      <span
                        className="inline-flex items-center rounded-[var(--radius-sm)] px-2 py-0.5 text-xs font-medium text-white"
                        style={{ backgroundColor: "var(--secondary-500)" }}
                      >
                        Purple Badge
                      </span>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm font-medium mb-2">Gradient</div>
                    <div
                      className="h-20 rounded-[var(--radius)] shadow-sm"
                      style={{ background: "linear-gradient(135deg, var(--primary-500) 0%, var(--secondary-500) 100%)" }}
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm font-medium mb-2">Complementary Backgrounds</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div
                        className="h-16 rounded-[var(--radius)] flex items-center justify-center text-sm font-medium"
                        style={{ backgroundColor: "var(--primary-50)", color: "var(--primary-700)" }}
                      >
                        Blue Light
                      </div>
                      <div
                        className="h-16 rounded-[var(--radius)] flex items-center justify-center text-sm font-medium"
                        style={{ backgroundColor: "var(--secondary-50)", color: "var(--secondary-700)" }}
                      >
                        Purple Light
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Semantic Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Semantic Colors</CardTitle>
                <CardDescription>Colors for success, warning, error, and info states</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <ColorSwatch color="var(--success)" name="Success" varName="--success" />
                  <ColorSwatch color="var(--warning)" name="Warning" varName="--warning" />
                  <ColorSwatch color="var(--error)"   name="Error"   varName="--error"   />
                  <ColorSwatch color="var(--info)"    name="Info"    varName="--info"    />
                </div>
              </CardContent>
            </Card>

            {/* Spacing */}
            <Card>
              <CardHeader>
                <CardTitle>Spacing Scale</CardTitle>
                <CardDescription>Consistent spacing tokens for layouts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <TokenRow name="Extra Small" value="0.25rem (4px)"  variable="--spacing-xs"  />
                  <TokenRow name="Small"       value="0.5rem (8px)"   variable="--spacing-sm"  />
                  <TokenRow name="Medium"      value="1rem (16px)"    variable="--spacing-md"  />
                  <TokenRow name="Large"       value="1.5rem (24px)"  variable="--spacing-lg"  />
                  <TokenRow name="Extra Large" value="2rem (32px)"    variable="--spacing-xl"  />
                  <TokenRow name="2X Large"    value="3rem (48px)"    variable="--spacing-2xl" />
                </div>
              </CardContent>
            </Card>

            {/* Border Radius */}
            <Card>
              <CardHeader>
                <CardTitle>Border Radius</CardTitle>
                <CardDescription>Rounded corner values</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <TokenRow name="Base Radius" value="0.5rem (8px)"          variable="--radius"    />
                  <TokenRow name="Small"        value="calc(--radius - 4px)" variable="--radius-sm" />
                  <TokenRow name="Medium"       value="calc(--radius - 2px)" variable="--radius-md" />
                  <TokenRow name="Large"        value="--radius"             variable="--radius-lg" />
                  <TokenRow name="Extra Large"  value="calc(--radius + 4px)" variable="--radius-xl" />
                </div>
              </CardContent>
            </Card>

            {/* Shadows */}
            <Card>
              <CardHeader>
                <CardTitle>Shadow System</CardTitle>
                <CardDescription>Elevation and depth through shadows</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {(["sm", "md", "lg", "xl"] as const).map((s) => (
                    <div key={s} className="flex flex-col gap-2">
                      <div
                        className="h-20 rounded-[var(--radius)] bg-card border border-border"
                        style={{ boxShadow: `var(--shadow-${s})` }}
                      />
                      <div className="text-sm font-medium capitalize">{s === "sm" ? "Small" : s === "md" ? "Medium" : s === "lg" ? "Large" : "Extra Large"}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Components Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Components</h2>

          <div className="grid gap-8">
            {/* Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>Button variants and sizes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium mb-3">Variants</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button>Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="link">Link</Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-3">Sizes</h4>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                      <Button size="icon"><Check className="h-4 w-4" /></Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-3">States</h4>
                    <div className="flex flex-wrap gap-3">
                      <Button>Default</Button>
                      <Button disabled>Disabled</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inputs */}
            <Card>
              <CardHeader>
                <CardTitle>Inputs</CardTitle>
                <CardDescription>Form input components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-w-md">
                  <div>
                    <Label className="mb-2">Text Input</Label>
                    <Input placeholder="Enter text..." />
                  </div>
                  <div>
                    <Label className="mb-2">With Error</Label>
                    <Input placeholder="Invalid input" aria-invalid />
                  </div>
                  <div>
                    <Label className="mb-2">Disabled</Label>
                    <Input placeholder="Disabled input" disabled />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Textarea */}
            <Card>
              <CardHeader>
                <CardTitle>Textarea</CardTitle>
                <CardDescription>Multi-line text input</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-w-md">
                  <Textarea placeholder="Enter your message..." rows={4} />
                  <Textarea placeholder="Error state" aria-invalid rows={3} />
                </div>
              </CardContent>
            </Card>

            {/* Select */}
            <Card>
              <CardHeader>
                <CardTitle>Select</CardTitle>
                <CardDescription>Dropdown selection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-w-md">
                  <NativeSelect>
                    <option value="">Choose an option...</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </NativeSelect>
                  <NativeSelect error>
                    <option value="">Error state</option>
                  </NativeSelect>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>Label and status indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge className="border-transparent bg-success text-success-foreground">Success</Badge>
                  <Badge className="border-transparent bg-warning text-warning-foreground">Warning</Badge>
                  <Badge className="border-transparent" style={{ backgroundColor: "var(--info)", color: "white" }}>Info</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts</CardTitle>
                <CardDescription>Notification and message components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Default Alert</AlertTitle>
                    <AlertDescription>This is a default alert message with some helpful information.</AlertDescription>
                  </Alert>
                  <Alert className="bg-[#ecfdf5] text-[#065f46]">
                    <CheckCircle2 className="h-4 w-4" />
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>Your changes have been saved successfully.</AlertDescription>
                  </Alert>
                  <Alert className="bg-[#fffbeb] text-[#92400e]">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Warning</AlertTitle>
                    <AlertDescription>Please review your input before continuing.</AlertDescription>
                  </Alert>
                  <Alert className="bg-[#fef2f2] text-[#991b1b]">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>An error occurred while processing your request.</AlertDescription>
                  </Alert>
                  <Alert className="bg-[#eff6ff] text-[#1e40af]">
                    <Info className="h-4 w-4" />
                    <AlertTitle>Info</AlertTitle>
                    <AlertDescription>Here's some useful information about this feature.</AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>

            {/* Avatars */}
            <Card>
              <CardHeader>
                <CardTitle>Avatars</CardTitle>
                <CardDescription>User profile images with fallbacks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-3">Sizes</h4>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 text-xs">
                        <AvatarFallback>SM</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-10 w-10 text-sm">
                        <AvatarFallback>MD</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-12 w-12 text-base">
                        <AvatarFallback>LG</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-16 w-16 text-lg">
                        <AvatarFallback>XL</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Checkboxes */}
            <Card>
              <CardHeader>
                <CardTitle>Checkboxes</CardTitle>
                <CardDescription>Multiple selection controls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id="cb1" defaultChecked />
                    <Label htmlFor="cb1">Option 1</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="cb2" />
                    <Label htmlFor="cb2">Option 2</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="cb3" disabled />
                    <Label htmlFor="cb3" className="opacity-50 cursor-not-allowed">Disabled</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="cb4" disabled defaultChecked />
                    <Label htmlFor="cb4" className="opacity-50 cursor-not-allowed">Disabled Checked</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Radio Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Radio Buttons</CardTitle>
                <CardDescription>Single selection controls</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="option1" className="space-y-3">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="option1" id="r1" />
                    <Label htmlFor="r1">Option 1</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="option2" id="r2" />
                    <Label htmlFor="r2">Option 2</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="option3" id="r3" />
                    <Label htmlFor="r3">Option 3</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="disabled" id="r4" disabled />
                    <Label htmlFor="r4" className="opacity-50 cursor-not-allowed">Disabled</Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Switches */}
            <Card>
              <CardHeader>
                <CardTitle>Switches</CardTitle>
                <CardDescription>Toggle controls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Switch id="sw1" defaultChecked />
                    <Label htmlFor="sw1">Enable notifications</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="sw2" />
                    <Label htmlFor="sw2">Auto-save</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="sw3" disabled />
                    <Label htmlFor="sw3" className="opacity-50 cursor-not-allowed">Disabled</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="sw4" disabled defaultChecked />
                    <Label htmlFor="sw4" className="opacity-50 cursor-not-allowed">Disabled Checked</Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Progress Bars</CardTitle>
                <CardDescription>Progress indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Default (gradient)</span>
                      <span className="text-muted-foreground">25%</span>
                    </div>
                    <Progress value={25} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Success</span>
                      <span className="text-muted-foreground">50%</span>
                    </div>
                    <ColoredProgress value={50} color="var(--success)" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Warning</span>
                      <span className="text-muted-foreground">75%</span>
                    </div>
                    <ColoredProgress value={75} color="var(--warning)" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Error</span>
                      <span className="text-muted-foreground">100%</span>
                    </div>
                    <ColoredProgress value={100} color="var(--error)" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Spinners */}
            <Card>
              <CardHeader>
                <CardTitle>Spinners</CardTitle>
                <CardDescription>Loading indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="sm" />
                    <span className="text-sm text-muted-foreground">Small</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="md" />
                    <span className="text-sm text-muted-foreground">Medium</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="lg" />
                    <span className="text-sm text-muted-foreground">Large</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skeletons */}
            <Card>
              <CardHeader>
                <CardTitle>Skeletons</CardTitle>
                <CardDescription>Loading placeholders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Cards</CardTitle>
                <CardDescription>Container components with header, content, and footer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card description goes here</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">This is the card content area where you can place any content.</p>
                    </CardContent>
                    <CardFooter className="gap-2">
                      <Button variant="outline" size="sm">Cancel</Button>
                      <Button size="sm">Save</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Another Card</CardTitle>
                      <CardDescription>With skeleton content</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-4/5" />
                        <Skeleton className="h-4 w-3/5" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Usage Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Usage Example</h2>
          <Card>
            <CardHeader>
              <CardTitle>Complete Form Example</CardTitle>
              <CardDescription>A real-world example combining multiple components</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6 max-w-2xl">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <Label>Role</Label>
                  <NativeSelect>
                    <option value="">Select a role...</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                  </NativeSelect>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Tell us about yourself..." rows={4} />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">I agree to the terms and conditions</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Switch id="notifications" defaultChecked />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>

                <Alert className="bg-[#eff6ff] text-[#1e40af]">
                  <Info className="h-4 w-4" />
                  <AlertTitle>Pro Tip</AlertTitle>
                  <AlertDescription>Make sure all required fields are filled out before submitting.</AlertDescription>
                </Alert>

                <div className="flex gap-3">
                  <Button variant="outline">Cancel</Button>
                  <Button>Submit Form</Button>
                </div>
              </form>
            </CardContent>
          </Card>
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
              <Badge>Primary: #3153fa</Badge>
              <span
                className="inline-flex items-center rounded-[var(--radius-sm)] px-2 py-0.5 text-xs font-medium text-white"
                style={{ backgroundColor: "var(--secondary-500)" }}
              >
                Secondary: #7c3aed
              </span>
              <Badge variant="outline">v1.0.0</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;