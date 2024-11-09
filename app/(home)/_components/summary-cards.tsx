import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SumaryCard from "./sumary-card";

interface SumaryCardProps {
  month: string;
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}
const SumaryCards = async ({
  balance,
  depositsTotal,
  investmentsTotal,
  expensesTotal,
}: SumaryCardProps) => {
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
