import Link from "next/link";
import { Button } from "react-bootstrap";

export default function Success() {
  return (
    <div className="xs:p-2 sm:p-2 md:p-5 lg:py-5 xl:py-5 px-28 text-center justify-center min-h-screen">
      <label className="text-2xl font-black">PAID SUCCESSFULLY!</label>
      <img src="../Successful purchase-pana 36AE54.png" className="xs:w-full sm:w-full w-1/3 ml-auto mr-auto" />
      <Link href="/">
      <Button variant="success" className="mt-3 text-sm bg-green-600 border-none rounded-3xl">
            Back To Home
      </Button>
      </Link>
    </div>
  )
}
