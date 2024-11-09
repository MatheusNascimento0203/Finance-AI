import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SumaryCard from "./sumary-card";
import { db } from "@/app/_lib/prisma";

interface SumaryCardProps {
  month: string;
}
const SumaryCards = async ({ month }: SumaryCardProps) => {
  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lte: new Date(`2024-${month}-31`),
    },
  };

  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );

  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const balance = depositsTotal - investmentsTotal - expensesTotal;

  return (
    <div className="space-y-6">
      <SumaryCard
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
      />

      <div className="grid grid-cols-3 gap-6">
        <SumaryCard
          amount={investmentsTotal}
          icon={<PiggyBankIcon size={16} />}
          title="Investido"
        />

        <SumaryCard
          amount={depositsTotal}
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          title="Receita"
        />

        <SumaryCard
          amount={expensesTotal}
          icon={<TrendingDownIcon size={16} className="text-danger" />}
          title="Despesas"
        />
      </div>
    </div>
  );
};

export default SumaryCards;
