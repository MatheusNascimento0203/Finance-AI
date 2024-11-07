"use client";

import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import { Button } from "./ui/button";
import { ArrowDownUpIcon } from "lucide-react";

const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <div>
      <>
        <Button
          className="rounded-full font-bold"
          onClick={() => setDialogIsOpen(true)}
        >
          Adicionar Transação <ArrowDownUpIcon className="mr-2" />
        </Button>

        <UpsertTransactionDialog
          isOpen={dialogIsOpen}
          setIsOpen={setDialogIsOpen}
        />
      </>
    </div>
  );
};

export default AddTransactionButton;
