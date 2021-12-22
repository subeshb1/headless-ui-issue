import { Dialog } from '@headlessui/react';
import React, { ReactElement, ReactNode } from 'react';
import { Button } from '../Button/Button';
import Panel from '../Panel/Panel';

interface Props {
  heading?: ReactNode;
  onClose: () => void;
  onExit?: () => void;
  onConfirm: () => void;
  loading?: boolean;
  text?: ReactNode;
  children?: ReactNode;
  cancelText?: string;
  confirmText?: string;
  danger?: boolean;
}

export default function Modal({
  heading,
  loading,
  text,
  onClose,
  children,
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  onConfirm,
  danger = false,
  onExit = () => undefined,
}: Props): ReactElement {
  return (
    <Dialog
      className="fixed inset-0 overflow-y-auto"
      open={true}
      style={{ zIndex: 1000 }}
      onClose={onExit}
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="relative  rounded  max-w-2xl px-4 mx-auto w-full">
          <Panel>
            <Panel.Heading className="flex items-center gap-x-2">
              {heading}
            </Panel.Heading>
            {text && <div className="p-5 text-gray-600">{text}</div>}
            {children}
            <Panel.Footer className="flex justify-end space-x-4">
              <Button
                onClick={onClose}
                bgClass="bg-white"
                textClass="text-black"
                className="border border-gray-300 "
              >
                {cancelText}
              </Button>
              <Button
                onClick={onConfirm}
                bgClass={danger ? 'bg-br-red' : undefined}
                loading={loading}
                disabled={loading}
              >
                {confirmText}
              </Button>
            </Panel.Footer>
          </Panel>
        </div>
      </div>
    </Dialog>
  );
}
