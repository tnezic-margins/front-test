import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "shared/ui";

type DialogWrapperProps = {
  dialogTriggerButton: ReactNode | string;
  dialogTitle: string;
  dialogDescription?: string;
  dialogContent: (onClick: () => void) => ReactNode;
};

export const DialogWrapper = ({
  dialogTriggerButton,
  dialogTitle,
  dialogDescription,
  dialogContent,
}: DialogWrapperProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>{dialogTriggerButton}</DialogTrigger>

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
