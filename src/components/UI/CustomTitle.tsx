const CustomTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-5 text-purple-600">
        {title}
      </h1>
    </div>
  );
};

export default CustomTitle;
