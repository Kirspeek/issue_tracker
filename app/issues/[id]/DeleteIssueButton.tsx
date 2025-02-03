"use client";

import { AlertDialog, Button, Flex, Spinner } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
<<<<<<< HEAD
  issueId: string;
=======
  issueId: number;
>>>>>>> f25775c (Initial commit for issue-tracker)
}

const DeleteIssueButton = ({ issueId }: Props) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isDeleting, setDeleting] = useState(false);

  const deleteIssue = async () => {
    try {
      setDeleting(true);
<<<<<<< HEAD
      await axios.delete(`/api/issues/${issueId}`);
      router.push("/issues/list");
      router.refresh();
    } catch (err) {
      console.error("Failed to delete issue:", err);
=======
      await axios.delete("/api/issues/" + issueId);
      router.push("/issues/list");
      router.refresh();
    } catch (error) {
>>>>>>> f25775c (Initial commit for issue-tracker)
      setDeleting(false);
      setError(true);
    }
  };

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="crimson" disabled={isDeleting}>
<<<<<<< HEAD
            {isDeleting ? <Spinner /> : "Delete Issue"}
=======
            Delete Issue
            {isDeleting && <Spinner />}
>>>>>>> f25775c (Initial commit for issue-tracker)
          </Button>
        </AlertDialog.Trigger>

        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
<<<<<<< HEAD
=======

>>>>>>> f25775c (Initial commit for issue-tracker)
          <AlertDialog.Description size="2">
            Are you sure you want to delete this issue? This action cannot be
            undone.
          </AlertDialog.Description>
<<<<<<< HEAD
=======

>>>>>>> f25775c (Initial commit for issue-tracker)
          <Flex mt="4" gap="3" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="crimson" onClick={deleteIssue}>
<<<<<<< HEAD
                Confirm Delete
=======
                Delete Issue
>>>>>>> f25775c (Initial commit for issue-tracker)
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>

<<<<<<< HEAD
      {error && (
        <AlertDialog.Root open={error} onOpenChange={setError}>
          <AlertDialog.Content maxWidth="450px">
            <AlertDialog.Title>Error</AlertDialog.Title>
            <AlertDialog.Description size="2">
              Unable to delete the issue. Please try again later.
            </AlertDialog.Description>
            <Flex mt="4" gap="3" justify="end">
              <Button
                color="gray"
                variant="soft"
                onClick={() => setError(false)}
              >
                Close
              </Button>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      )}
=======
      <AlertDialog.Root open={error}>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description size="2">
            This issue could not be deleted.
          </AlertDialog.Description>

          <Flex mt="4" gap="3" justify="end">
            <Button color="gray" variant="soft" onClick={() => setError(false)}>
              Close
            </Button>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
>>>>>>> f25775c (Initial commit for issue-tracker)
    </>
  );
};

export default DeleteIssueButton;
