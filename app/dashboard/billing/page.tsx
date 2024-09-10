"use client";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import moment from "moment";
import React, { useContext, useState } from "react";

function billing() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { userSubscription, setUserSubscription } = useContext(
    UserSubscriptionContext
  );
  const CreateSubscription = () => {
    setLoading(true);
    axios.post("/api/create-subscription", {}).then(
      (resp) => {
        console.log(resp.data);
        OnPayment(resp.data.id);
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  const OnPayment = (subId: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: subId,
      name: "HeisenbergAI",
      description: "Monthly Subscription",
      handler: async (resp: any) => {
        console.log(resp);
        if (resp) {
          SaveSubscription(resp.razorpay_payment_id);
        }
        setLoading(false);
      },
    };

    // @ts-ignore()
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const SaveSubscription = async (subscriptionId: string) => {
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      active: true,
      subscriptionId: subscriptionId,
      joinDate: moment().format("YYYY-MM-DD"),
    });
    console.log(result);
    if (result) {
      window.location.reload();
    }
  };

  return (
    <div>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

      <div className="mx-auto px-4 py-8 h-screen sm:px-6 sm:py-12 lg:max-w-full bg-gradient-to-b from-white via-slate-200 to-slate-300">
        <h2 className="text-center font-bold text-3xl my-">
          Upgrade with Monthly Plan
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:grid-cols-2 md:items-center border bg-white">
          <div className="ml-64 rounded-2xl bg-white border border-slate-300">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Free
                <span className="sr-only">Plan</span>
              </h2>
              <p className="mt-6 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-center">
                  0$
                </strong>
                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>
            </div>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-[#ff0000]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  ></path>
                </svg>
                <span className="text-gray-700">20,000 Words/Month</span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-[#ff0000]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  ></path>
                </svg>
                <span className="text-gray-700">50+Content Templates</span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-[#ff0000]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  ></path>
                </svg>
                <span className="text-gray-700">Unlimited Download & Copy</span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-[#ff0000]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  ></path>
                </svg>
                <span className="text-gray-700">1 Month of History</span>
              </li>
            </ul>
            <a
              href="#"
              className="mt-8 block w-full rounded-full border border-[#ff0000] bg-gray-500 px-5 py-3 text-center text-sm font-medium mb-20 text-white hover:bg-gray-700 hover:ring-1 hover:ring-[#350202]"
            >
              Currently Active Plan
            </a>
          </div>
          <div className="mr-64 rounded-2xl bg-white border border-slate-300">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Monthly
                <span className="sr-only">Plan</span>
              </h2>
              <p className="mt-6 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-center">
                  9.99$
                </strong>
                <span className="text-sm font-medium text-gray-700">
                  /month
                </span>
              </p>
            </div>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-[#ff0000]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  ></path>
                </svg>
                <span className="text-gray-700">1,00,000 Words/Month</span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-[#ff0000]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  ></path>
                </svg>
                <span className="text-gray-700">50+ Templates Access</span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-[#ff0000]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  ></path>
                </svg>
                <span className="text-gray-700">Unlimited Download & Copy</span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-[#ff0000]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  ></path>
                </svg>
                <span className="text-gray-700">1 Year of History</span>
              </li>
            </ul>
            <button
              disabled={loading}
              onClick={CreateSubscription}
              className="mt-8 w-full rounded-full border block gap-2 items-center border-[#ff0000] bg-white px-5 py-3 text-center text-sm font-medium mb-20 text-primary hover:bg-gray-700 hover:ring-1 hover:ring-[#350202]"
            >
              {loading && <Loader2Icon className="animate-spin" />}
              {userSubscription ? "Current Plan" : "Get Started"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default billing;
