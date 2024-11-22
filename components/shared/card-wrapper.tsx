import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Header from "@/components/auth/header";
import { Separator } from "@/components/ui/separator";
import Social from "@/components/auth/social";
import LinkButton from "@/components/shared/link-button";

interface CardWrapperProps {
  children: ReactNode;
  headerLabel: string;
  showSocial?: boolean;
  linkButtonHref: string;
  linkButtonLabel: string;
}

const CardWrapper = ({
  children,
  headerLabel,
  showSocial,
  linkButtonHref,
  linkButtonLabel,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent className="pb-2">
        {children}
        {showSocial && (
          <>
            <div className="px-0">
              <Separator className="my-4" />
            </div>
            <div>
              <Social />
            </div>
          </>
        )}
      </CardContent>
      <CardFooter>
        <LinkButton href={linkButtonHref} label={linkButtonLabel} />
      </CardFooter>
    </Card>
  );
};
export default CardWrapper;
