/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import Link from "next/link";
import Layout from "../components/layout";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

export default function Contact() {
  const [open, setOpen] = useState(true);

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }

  return (
    <Layout>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 overflow-hidden"
          open={open}
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                    <Link href={"/"}>
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Contact
                          </Dialog.Title>
                          <div className="ml-3 h-7 flex items-center">
                            <button
                              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                      <div className="bg-gray-300 shadow-xl sm:rounded-lg">
                        <div className="px-4 py-5 md:p-6">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Connect with me
                          </h3>
                          <div className="mt-3 max-w-xl text-sm text-gray-500">
                            <p>
                              Leave your email along with a message containing
                              who you are and how I can help!
                            </p>
                          </div>
                          <form
                            className="mt-5 sm:flex sm:items-center"
                            method="POST"
                            onSubmit={handleOnSubmit}
                          >
                            <div className="w-full ">
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Email
                              </label>
                              <input
                                type="text"
                                name="email"
                                id="email"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 text-sm border-gray-700 rounded-md"
                              />
                              <div>
                                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                  <div className="mt-1 sm:mt-0 sm:col-span-3">
                                    <label
                                      htmlFor="message"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Message
                                    </label>
                                    <textarea
                                      id="message"
                                      name="message"
                                      className="max-w-lg mb-3 shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                                      defaultValue={""}
                                    />
                                    <button
                                      type="submit"
                                      className="w-full sm:mt-2 inline-flex items-center justify-center px-8 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </Layout>
  );
}
