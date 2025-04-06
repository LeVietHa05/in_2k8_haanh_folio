import NoAuthorized from "../components/unAuthorized";
import { Suspense } from "react";
export default function Unauthorized() {
  return (
    <Suspense>
      <NoAuthorized />
    </Suspense>
  );
}
