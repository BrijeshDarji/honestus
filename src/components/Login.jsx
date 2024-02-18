import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Loader2 } from "lucide-react"
import * as yup from "yup"

import HonestusTransparent from "../assets/images/HonestusTransparent.svg"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/src/components/ui/form"

import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { useToast } from "@/src/components/ui/use-toast"

import { postApi } from "../helpers/ApiHelper"
import { LOGIN_API_PATH } from "../assets/constants/ApiPath"

import {
    ERROR_MESSAGES,
    SUCCESS_MESSAGES,
} from "../assets/constants/Messages"

const schema = yup
    .object({
        email: yup
            .string()
            .trim()
            .required("Email or Username is required"),
        password: yup
            .string()
            .trim()
            .required("Password is required"),
    })

function Login() {
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()

    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const handleLogin = (data) => {
        setLoading(true)

        postApi(LOGIN_API_PATH, data)
            .then(response => {
                toast({
                    title: SUCCESS_MESSAGES.TOAST_TITLE,
                    description: response.message,
                })
            })
            .catch(error => {
                toast({
                    title: ERROR_MESSAGES.TOAST_TITLE,
                    description: error.message,
                    variant: "destructive",
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <div className="border border-darkOrange rounded-lg flex flex-wrap m-10    w-105 lg:w-200    h-auto lg:h-103">
                <div className=' bg-darkOrange text-white font-medium p-10  rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none    text-4xl lg:text-5xl    w-full lg:w-1/2'>
                    Honestus.tech
                    <img
                        src={HonestusTransparent}
                        alt="Honestus"
                        className="float-right  w-36 lg:w-66    h-60 lg:h-96    -mr-16 lg:-mr-24"
                    />

                    <p className="text-lightWhite text-2xl leading-8 mt-3 lg:text-3xl lg:leading-12 md:mt-5">
                        Simplifying Material Testing!
                    </p>
                </div>

                <div className='p-10 w-full lg:w-1/2'>
                    <div className='text-darkSlate font-medium text-4xl mb-5 lg:text-5xl md:mb-10'>
                        Sign in
                    </div>

                    <Form {...form}>
                        <form
                            className="space-y-6"
                            onSubmit={form.handleSubmit(handleLogin)}
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your email or username</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="johndoe@gmail.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your password</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="**********"
                                                type="password"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                className="bg-darkOrange hover:bg-darkOrange focus-visible:border-darkOrange"
                                type="submit"
                                disabled={loading}
                            >
                                {loading
                                    ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Logging in
                                        </>
                                    )
                                    : "Login"
                                }
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login
