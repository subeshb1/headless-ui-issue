import React, { ReactElement, ReactNode } from 'react';
import { Button, ButtonProps } from '../Button/Button';
import Modal from 'components/shared/Modal/Modal';

interface ActionConfirmProps extends ButtonProps<'button'> {
  action: () => Promise<unknown>;
  heading: ReactNode;
  message: ReactNode;
  danger?: boolean;
  confirmText?: string;
}

export default function ActionConfirm({
  loading,
  heading,
  message,
  action,
  danger = false,
  confirmText,
  ...buttonProps
}: ActionConfirmProps): ReactElement {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
          onExit={() => {
            setShowModal(false);
          }}
          confirmText={confirmText}
          danger={danger}
          heading={heading}
          text={message}
          loading={loading}
          onConfirm={() => action().then(() => setShowModal(false))}
        />
      )}
      <Button
        onClick={() => {
          setShowModal(true);
        }}
        {...buttonProps}
      ></Button>
    </>
  );
}
