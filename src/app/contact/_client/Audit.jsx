"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SendBtn } from "@/components/buttons/SendBtn";
import { PhoneInput } from "@/components/ui/phone-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { toast } from "sonner";
import axios from "axios";
import { BorderBeam } from "@/components/ui/border-beam";
import { usePathname } from "next/navigation";

import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, {
      message: "Please enter at least 2 characters",
    })
    .max(50, {
      message: "Please enter at msost 50 characters",
    }),
  workEmail: z.string().email(),
  phoneNumber: z
    .string()
    .min(7, {
      message: "Invalid phone number",
    })
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  orderType: z.string(),
  message: z.string().optional(),
});

const Audit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      phoneNumber: "",
      orderType: "Bulk Order",
      message: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      setIsSubmitting(true);

      console.log(values);
    } catch (err) {
      toast.error("Internal server error, Try again later!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white shadow-2xl rounded-[19px] p-10 min-w-[280px] max-w-[100%] lg:max-w-[500px] w-auto relative lg:mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 z-[39] relative"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workEmail"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Work Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PhoneInput
                    {...field}
                    placeholder="Phone number"
                    defaultCountry="IN"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="orderType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Order Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-5 space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Bulk Order" />
                      </FormControl>
                      <FormLabel className="font-normal">Bulk Order</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Single Order" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Single Order
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    className="border-b-2 border-r-2 border-[#F2F2F2] "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <SendBtn type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </SendBtn>
        </form>
      </Form>
      <BorderBeam size={250} />
    </div>
  );
};

export default Audit;
