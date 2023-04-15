import React from "react";

export const Story = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 grid-cols-1 font-poiret_one mx-10 h-[100vh]">
      <div className="lg:col-span-2 flex justify-center">
        <img
          src="https://via.placeholder.com/500x500"
          className="rounded-lg w-full lg:h-2/3 sm:h-full"
          alt="The Lion King"
        />
      </div>
      <div className="lg:col-span-3">
        <div className="text-center lg:text-xl text-sm text-white">
          <h1 className="text-4xl font-bold text-white">THE LION KING</h1>
          <p className="my-5">
            A Lion lay asleep in the forest, his great head resting on his paws.
            A timid little Mouse came upon him unexpectedly, and in her fright
            and haste to get away, ran across the Lion's nose. Roused from his
            nap, the Lion laid his huge paw angrily on the tiny creature to kill
            her.
          </p>
          <p className="my-5">
            "Spare me!" begged the poor Mouse. "Please let me go and some day I
            will surely repay you."
          </p>
          <p className="my-5">
            The Lion was much amused to think that a Mouse could ever help him.
            But he was generous and finally let the Mouse go.
          </p>
          <p className="my-5">
            Some days later, while stalking his prey in the forest, the Lion was
            caught in the toils of a hunter's net. Unable to free himself, he
            filled the forest with his angry roaring. The Mouse knew the voice
            and quickly found the Lion struggling in the net. Running to one of
            the great ropes that bound him, she gnawed it until it parted, and
            soon the Lion was free.
          </p>
          <p className="my-5">
            "You laughed when I said I would repay you," said the Mouse. "Now
            you see that even a Mouse can help a Lion."
          </p>
          <p className="my-5">
            "You laughed when I said I would repay you," said the Mouse. "Now
            you see that even a Mouse can help a Lion."
          </p>
          <p className="my-5">Moral: A kindness is never wasted.</p>
        </div>
      </div>
    </div>
  );
};
