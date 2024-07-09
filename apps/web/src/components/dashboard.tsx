/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QuweMEbAk9G
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardContent } from "./card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "./table"
import { Badge } from "./badge"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "./chart"
import { Pie, PieChart, CartesianGrid, XAxis, Bar, BarChart } from "recharts"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-card py-4 px-6 border-b">
        <h1 className="text-2xl font-bold">Expense Tracker</h1>
      </header>
      <main className="flex-1 grid gap-6 p-6 md:p-10">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">$3,456.78</div>
              <p className="text-muted-foreground">+12.5% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Expenses by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <PiechartcustomChart className="w-full aspect-square" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Spending Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <BarchartChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2023-06-01</TableCell>
                  <TableCell>$45.67</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Groceries</Badge>
                  </TableCell>
                  <TableCell>Whole Foods purchase</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-05-28</TableCell>
                  <TableCell>$25.99</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Transportation</Badge>
                  </TableCell>
                  <TableCell>Uber ride</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-05-20</TableCell>
                  <TableCell>$120.00</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Utilities</Badge>
                  </TableCell>
                  <TableCell>Electricity bill</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-05-15</TableCell>
                  <TableCell>$78.32</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Dining</Badge>
                  </TableCell>
                  <TableCell>Dinner at restaurant</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-05-10</TableCell>
                  <TableCell>$59.99</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Entertainment</Badge>
                  </TableCell>
                  <TableCell>Movie tickets</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

function BarchartChart(props: any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <BarChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}


function PiechartcustomChart(props: any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          visitors: {
            label: "Visitors",
          },
          chrome: {
            label: "Chrome",
            color: "hsl(var(--chart-1))",
          },
          safari: {
            label: "Safari",
            color: "hsl(var(--chart-2))",
          },
          firefox: {
            label: "Firefox",
            color: "hsl(var(--chart-3))",
          },
          edge: {
            label: "Edge",
            color: "hsl(var(--chart-4))",
          },
          other: {
            label: "Other",
            color: "hsl(var(--chart-5))",
          },
        }}
      >
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={[
              { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
              { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
              { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
              { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
              { browser: "other", visitors: 90, fill: "var(--color-other)" },
            ]}
            dataKey="visitors"
            nameKey="browser"
          />
        </PieChart>
      </ChartContainer>
    </div>
  )
}