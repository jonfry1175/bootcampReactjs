import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import {zodResolver} from '@hookform/resolvers/zod'

const validateForm = z.object({
  email: z.string().email("ga valid coy!"),
  username: z.string().min(5, "minimum 5 characters"),
  password: z.string().min(7, "minimum 5 characters"),
});

const Register = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    resolver: zodResolver(validateForm),
  });

  const registerUser = (data) => {
    alert(`Succes! Your data: ${JSON.stringify(data)}`);
    console.log(data)
  };

  // handleSubmit bawaan dari react-hook-form
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[300px]">
        <CardHeader className="font-semibold text-lg">Sign Up!</CardHeader>
        <Divider />
        <form onSubmit={form.handleSubmit(registerUser)}>
          <CardBody className="flex flex-col gap-4">
            <Controller
              name="email"
              control={form.control}
              // field = props
              // fieldState = untuk mengetahui pesan validasi eror
              render={({ field, fieldState }) => {
                return (
                  <Input
                    {...field}
                    label="email"
                    size="sm"
                    type="email"
                    isInvalid={Boolean(fieldState.error)}
                    errorMessage={fieldState.error?.message}
                  />
                );
              }}
            />
            {/*  control = semua method yang ada di var form */}
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => {
                return (
                  <Input
                    {...field}
                    label="username"
                    size="sm"
                    isInvalid={Boolean(fieldState.error)}
                    errorMessage={fieldState.error?.message}
                  />
                );
              }}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => {
                return (
                  <Input
                    {...field}
                    label="password"
                    size="sm"
                    type="password"
                    isInvalid={Boolean(fieldState.error)}
                    errorMessage={fieldState.error?.message}
                  />
                );
              }}
            />
            <Button type="submit" color="primary">
              Sign Up
            </Button>
          </CardBody>
        </form>
      </Card>
    </div>
  );
};

export default Register;
