"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import { Transaction } from "@prisma/client";

interface EditTransactionButtonProps {
  transaction: Transaction;
}

const EditTransactionButton = ({ transaction }: EditTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <div>
      <>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground"
          onClick={() => setDialogIsOpen(true)}
        >
          <Pencil />
        </Button>

        <UpsertTransactionDialog
          isOpen={dialogIsOpen}
          setIsOpen={setDialogIsOpen}
          defaultValues={{
            ...transaction,
            amount: Number(transaction.amount),
          }}
          transactionId={transaction.id}
        />
      </>
    </div>
  );
};

export default EditTransactionButton;
