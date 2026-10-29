export default function Form() {
  return (
    <>
      <div className="bg-amber-100">
        <div className=" py-8 w-11/12 mx-auto">
          <h1 className="font-roboto-slab text-4xl font-bold text-amber-900">
            Leaf &amp; Brew Box
          </h1>
          <h2 className="text-amber-800 text-lg font-semibold my-2">
            Preferences
          </h2>

          <form className="flex flex-col bg-white p-3 relative  mx-auto">
            {/* SUBSCRIPTION */}
            <fieldset className="flex  flex-col gap-5 md:flex-row md:flex-wrap  ">
              <legend className="block text-orange-800 text-lg font-semibold pt-2">
                Subscription
              </legend>

              {/* SUBSCRIPTION TIER */}
              <section class=" flex flex-col md:w-1/2">
                <label className="font-bold text-md">Subscription Tier</label>
                <select className="border border-amber-300 w-full p-2">
                  <option>Basic (1 tea per month)</option>
                  <option>Standard (3 teas per month)</option>
                  <option>Deluxe (5 teas per month)</option>
                </select>
              </section>

              {/* TASTE PREFERENCE */}
              <section class="   flex flex-col text-md md:grow">
                <p className="font-bold ">Taste Preference</p>
                <section>
                  <section className="gap-1 flex ">
                    <input type="checkbox" id="fruity" name="fruity" />
                    <label for="fruity">Fruity</label>
                  </section>
                  <section className="gap-1 flex ">
                    <input type="checkbox" id="floral" name="floral" />
                    <label for="floral">Floral</label>
                  </section>
                  <section className="gap-1 flex ">
                    <input type="checkbox" id="sweet" name="sweet" />
                    <label for="sweet">Sweet</label>
                  </section>
                </section>
              </section>

              {/* LOOSE OR BAGGED */}
              <section class="  flex flex-col  md:order-4 md:grow text-md">
                <p className="font-bold ">Loose Leaf or Bagged?</p>
                <section>
                  <section className="gap-1 flex ">
                    <input type="radio" id="loose" name="tea-preference" />
                    <label for="loose">Loose</label>
                  </section>
                  <section className="gap-1 flex ">
                    <input type="radio" id="bagged" name="tea-preference" />
                    <label for="bagged">Bagged</label>
                  </section>
                  <section className="gap-1 flex ">
                    <input type="radio" id="either" name="tea-preference" />
                    <label for="either">Either</label>
                  </section>
                </section>
              </section>

              {/* DIETARY RESTRICTIONS */}
              <section class="  flex flex-col md:w-1/2  text-md">
                <label for="delivery_instructions " className="font-bold ">
                  Dietary Restrictions
                </label>
                <textarea
                  id="delivery_instructions"
                  className="w-full border h-20 border-amber-300  hover:bg-amber-50 hover:border-lime-600"
                ></textarea>
              </section>
            </fieldset>

            {/* CUSTOMER DETAILS */}
            <fieldset className="flex  flex-col gap-5 md:flex-row md:flex-wrap  relative mt-6 ">
              <legend className="block  text-orange-800 text-lg font-semibold pt-2">
                Details
              </legend>

              {/* NAME */}
              <section class="flex flex-col md:w-1/2 text-md">
                <label className="font-bold ">Full Name</label>
                <input
                  type="text"
                  value="Earl Greyson"
                  className="border border-amber-300 w-full  p-2"
                />
              </section>

              {/* EMAIL */}
              <section class=" flex  flex-col text-md md:grow">
                <label className="font-bold  w-full ">Email</label>
                <input
                  type="email"
                  value="earlgreyson@tealovers.com"
                  className="border border-amber-300  w-full  p-2"
                />
              </section>

              {/* DELIVERY */}
              <section class=" flex  flex-col text-md md:w-1/2  ">
                <h3 className="font-bold ">Delivery Address</h3>
                <section className=" border-amber-300 rounded-md p-2  w-full hover:bg-amber-50 border ">
                  <p>12 Brewster Lane</p>
                  <p>Steepville</p>
                  <p>TE 67894</p>
                  <a
                    href="#"
                    className="text-orange-800 block mt-4 underline  underline-offset-2  "
                  >
                    Change address
                  </a>
                </section>
              </section>

              {/* PAYMENT */}
              <section class=" flex md:grow flex-col  text-md">
                <h3 className="font-bold ">Payment Method</h3>
                <section className=" border  border-amber-300 rounded-md p-2 hover:bg-amber-50 w-full">
                  <section className="flex justify-between">
                    <p>....8523</p>
                    <section className="flex ">
                      <img src="./logo_visa.png" alt="visa" className="w-10" />
                      <img
                        src="./logo_mastercard.png"
                        alt="mastercard"
                        className="w-10"
                      />
                    </section>
                  </section>
                  <a
                    href="#"
                    className="text-orange-800 block mt-4 underline  underline-offset-2 "
                  >
                    Change payment method
                  </a>
                </section>
              </section>

              {/* DELIVERY ICON */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                className="absolute -top-8 right-3 fill-orange-800 "
              >
                <path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240Zm480 0q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120Z" />
              </svg>
            </fieldset>

            {/* SAVE BUTTON */}
            <input
              type="submit"
              value="Save Preferences"
              className="bg-amber-900 p-3 font-semibold text-white rounded-lg mt-4  hover:bg-amber-700 hover:cursor-pointer "
            />

            {/* FORM ICON */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100px"
              viewBox="0 -960 960 960"
              width="100px"
              className="absolute -top-12 right-3 fill-orange-800"
            >
              <path d="M160-120v-80h640v80H160Zm560-520h80v-120h-80v120ZM320-280q-66 0-113-47t-47-113v-400h200v96l-72 58q-2 2-8 16v170q0 8 6 14t14 6h160q8 0 14-6t6-14v-170q0-2-8-16l-72-58v-96h400q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Z" />
            </svg>
          </form>
          <footer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className=" fill-orange-800 mx-auto my-6 "
            >
              <path d="M160-120v-80h640v80H160Zm160-160q-66 0-113-47t-47-113v-400h640q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Zm0-480h320-400 80Zm400 120h80v-120h-80v120ZM560-360q33 0 56.5-23.5T640-440v-320H400v16l72 58q2 2 8 16v170q0 8-6 14t-14 6H300q-8 0-14-6t-6-14v-170q0-2 8-16l72-58v-16H240v320q0 33 23.5 56.5T320-360h240ZM360-760h40-40Z" />
            </svg>
          </footer>
        </div>
      </div>
    </>
  );
}
