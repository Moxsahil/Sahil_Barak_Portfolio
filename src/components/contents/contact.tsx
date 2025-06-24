"use client";

import { cn } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import SendButton from "../ui/send-button";
import { Textarea } from "../ui/textarea";
import AnimationContainer from "../utils/animation-container";
import emailjs from "emailjs-com";

const FormValidator = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(FormValidator),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const formRef = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    if (!formRef.current) return;
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          toast.success("Your message has been received!");
          form.reset();
          setTimeout(() => setIsSent(true), 1000);
        },
        (error) => {
          console.error(error);
          toast.error("Unable to send message, please try again.");
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <div id="contact" className="w-full relative pt-10 pb-40 z-40">
      <AnimationContainer animation="slide-up" delay={0.1}>
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            Get In Touch
          </h2>
        </div>
      </AnimationContainer>

      <div className="flex flex-col items-center justify-center gap-5 pt-10 w-full">
        <div className="flex flex-col items-center justify-center w-full gap-5 lg:flex-row">
          <Link
            href="mailto:sahilbarak18@gmail.com"
            className="flex-[0.5] w-full lg:w-auto"
          >
            <Button
              type="button"
              variant="outline"
              className="flex-col items-start w-full h-auto p-5"
            >
              <h6 className="text-base font-medium">📩 Email</h6>
              <p className="mt-2 text-base text-foreground/70">
                sahilbarak18@gmail.com
              </p>
            </Button>
          </Link>
          <Link
            href="tel:+917404927198"
            className="flex-[0.5] w-full lg:w-auto"
          >
            <Button
              type="button"
              variant="outline"
              className="flex-col items-start w-full h-auto p-5"
            >
              <h6 className="text-base font-medium">📞 Phone</h6>
              <p className="mt-2 text-base text-foreground/70">
                +91 7404927198
              </p>
            </Button>
          </Link>
        </div>

        <Form {...form}>
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center w-full space-y-5"
          >
            <AnimationContainer
              animation="slide-up"
              delay={0.2}
              className="w-full"
            >
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          name="user_firstname"
                          disabled={isLoading}
                          placeholder="First Name"
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.firstName?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          name="user_lastname"
                          disabled={isLoading}
                          placeholder="Last Name"
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.lastName?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
              </div>
            </AnimationContainer>

            <AnimationContainer
              animation="slide-up"
              delay={0.3}
              className="w-full"
            >
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          name="user_email"
                          disabled={isLoading}
                          type="email"
                          placeholder="Email"
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.email?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          {...field}
                          name="user_phone"
                          disabled={isLoading}
                          type="tel"
                          placeholder="Phone"
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.phone?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
              </div>
            </AnimationContainer>

            <AnimationContainer
              animation="slide-up"
              delay={0.4}
              className="w-full"
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Textarea
                        {...field}
                        name="user_message"
                        disabled={isLoading}
                        rows={5}
                        placeholder="Message..."
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.message?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />
            </AnimationContainer>

            <AnimationContainer
              animation="slide-up"
              delay={0.5}
              className="w-full"
            >
              <div className="flex flex-col items-center justify-center w-full mx-auto">
                <SendButton
                  isSent={isSent}
                  isLoading={isLoading}
                  setIsSent={setIsSent}
                  disabled={form.formState.disabled}
                />
                <p className="text-sm text-muted-foreground text-center mt-16">
                  Made with ❣️ by{" "}
                  <span className="font-semibold text-foreground">
                    Sahil Barak
                  </span>
                </p>
              </div>
            </AnimationContainer>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
