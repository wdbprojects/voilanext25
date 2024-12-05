import { auth } from "@/auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold text-purple-700">
        Settings page
      </h1>

      <Card className="mx-auto mt-8 max-w-[600px]">
        <CardHeader>Session Info</CardHeader>
        <CardContent>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </CardContent>
      </Card>
    </div>
  );
};
export default SettingsPage;
