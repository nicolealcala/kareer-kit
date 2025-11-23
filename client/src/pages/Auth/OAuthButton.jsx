import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function OAuth() {
  return (
    <div className="mx-auto w-full">
      <div className="flex my-6 max-w-full items-center gap-x-3">
        <Separator className="shrink" />
        <span className="font-medium text-gray-500 text-sm">Or</span>
        <Separator className="shrink" />
      </div>

      <Button className="w-full!" variant="outline" size="lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
          className="size-6 object-contain"
        />
        Login with Google
      </Button>
    </div>
  );
}

export default OAuth;
