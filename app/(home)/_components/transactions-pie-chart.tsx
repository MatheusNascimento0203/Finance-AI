"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionPercentagePerType } from "@/app/data/get-dashboard/type";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import PercentageItem from "./percentage-item";
import { ScrollArea } from "@/app/_components/ui/scroll-area";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#FFFFFF",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#E93030",
  },
} satisfies ChartConfig;

interface TransactionPierChartProps {
  typesPercentage: TransactionPercentagePerType;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const TransactionPierChart = ({
  depositsTotal,
  investmentsTotal,
  expensesTotal,
  typesPercentage,
}: TransactionPierChartProps) => {
  const chartData = [
    { type: TransactionType.DEPOSIT, amount: depositsTotal, fill: "#55B02E" },
    { type: TransactionType.EXPENSE, amount: expensesTotal, fill: "#E93030" },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#FFFFFF",
    },
  ];

  return (
    <ScrollArea className="rounded-md border">
      <Card className="flex flex-col p-6">
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="amount"
                nameKey="type"
                innerRadius={60}
              />
            </PieChart>
          </ChartContainer>
          <div className="space-y-3">
            <PercentageItem
              icon={<TrendingUpIcon size={16} className="text-primary" />}
              title="Receita"
              value={
                !isNaN(typesPercentage[TransactionType.DEPOSIT])
                  ? typesPercentage[TransactionType.DEPOSIT]
                  : 0
              }
            />
            <PercentageItem
              icon={<TrendingDownIcon size={16} className="text-danger" />}
              title="Despesas"
              value={
                !isNaN(typesPercentage[TransactionType.EXPENSE])
                  ? typesPercentage[TransactionType.EXPENSE]
                  : 0
              }
            />
            <PercentageItem
              icon={<PiggyBankIcon size={16} />}
              title="Investido"
              value={
                !isNaN(typesPercentage[TransactionType.INVESTMENT])
                  ? typesPercentage[TransactionType.INVESTMENT]
                  : 0
              }
            />
          </div>
        </CardContent>
      </Card>
    </ScrollArea>
  );
};

export default TransactionPierChart;
