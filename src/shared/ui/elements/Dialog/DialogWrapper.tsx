import { ReactNode, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "shared/ui";

type DialogWrapperProps = {
  dialogTriggerButtonLabel: string;
  dialogTitle: string;
  dialogDescription?: string;
  dialogContent: (onClick: () => void) => ReactNode;
};

export const DialogWrapper = ({
  dialogTriggerButtonLabel,
  dialogTitle,
  dialogDescription,
  dialogContent,
}: DialogWrapperProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button size="sm">{dialogTriggerButtonLabel}</Button>
      </DialogTrigger>

      <DialogContent aria-describedby="description">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>

          {dialogDescription && (
            <DialogDescription>{dialogDescription}</DialogDescription>
          )}
        </DialogHeader>

        {dialogContent(() => setIsDialogOpen(false))}
      </DialogContent>
    </Dialog>
  );
};
