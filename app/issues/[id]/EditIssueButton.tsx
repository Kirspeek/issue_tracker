import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
<<<<<<< HEAD
  issueId: string;
=======
  issueId: number;
>>>>>>> f25775c (Initial commit for issue-tracker)
}

const EditIssueButton = ({ issueId }: Props) => {
  return (
    <Button>
      <Pencil2Icon />
      <Link href={`/issues/edit/${issueId}`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
