import Button from "@/shared/components/button";

const Navigation = () => {
  return (
    <div className="p-sm flex items-center justify-between text-white">
      <div>logo</div>
      <div className="flex gap-sm">
        <Button
          variant="icon"
          size="md"
          iconOption={{ icon: "FOLDER", className: "size-2xl" }}
          className="text-white px-sm"
        />
        <Button
          variant="icon"
          size="md"
          iconOption={{ icon: "CHART", className: "size-2xl" }}
          className="text-white px-sm"
        />
        <Button
          variant="icon"
          size="md"
          iconOption={{ icon: "USER", className: "size-2xl" }}
          className="text-white px-sm"
        />
      </div>
    </div>
  );
};

export default Navigation;
