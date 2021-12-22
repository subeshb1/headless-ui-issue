import { useMutation } from "@apollo/client";
import { Button } from "components/shared/Button/Button";
import Input from "components/shared/Input/Input";
import Modal from "components/shared/Modal/Modal";
import client from "lib/apolloClient";
import { useRouter } from "next/router";
import { CREATE_ISSUES, LIST_REPOSITORY_ISSUES } from "queries/github";
import React, { ReactElement } from "react";
import toast from "react-hot-toast";

export default function CreateIssue({
  id,
  refetch,
}: {
  id: string;
  refetch: () => Promise<unknown>;
}): ReactElement {
  const [showModal, setShowModal] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [mutateFunction] = useMutation(CREATE_ISSUES);

  const [loading, setLoading] = React.useState(false);

  const onCloseModal = () => {
    setTitle("");
    setDescription("");
    setLoading(false);
    setShowModal(false);
  };
  return (
    <>
      <Button onClick={() => setShowModal(true)}>Create Issue</Button>
      {showModal && (
        <Modal
          heading="Create Issue"
          loading={loading}
          onConfirm={() => {
            setLoading(true);
            mutateFunction({
              variables: {
                title,
                body: description,
                id,
              },
            })
              .then(() => {
                return refetch();
              })
              .then(() => {
                onCloseModal();
                toast.success("Issue successfully created");
              })
              .catch(() => {
                toast.error("Something went wrong");
              })
              .finally(() => {
                setLoading(false);
              });
          }}
          onClose={() => onCloseModal()}
        >
          <form className="flex flex-col p-5 gap-5">
            <Input
              name="title"
              label="Title"
              className="w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700 mb-1">
                Description
              </span>
              <textarea
                className=" placeholder-gray-400 sm:text-sm border-gray-300 disabled:bg-gray-100 focus:ring-br-primary focus:border-br-primary rounded-md shadow-sm"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </form>
        </Modal>
      )}
    </>
  );
}
