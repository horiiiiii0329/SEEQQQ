import Card from "./UI/Card";
import MediumCard from "./UI/MediumCard";

function DatePlan() {
  return (
    <section className="my-20  ">
      <h2 className="text-3xl font-bold">人気のデートプラン</h2>
      <div className="grid grid-cols-4 gap-x-8">
        <MediumCard />
        <MediumCard />
        <MediumCard />
        <MediumCard />
      </div>
    </section>
  );
}

export default DatePlan;
