"use client"

import { useEffect, useRef, useState } from "react"
import { OTPInput } from "input-otp";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const CORRECT_CODE = "6548"

export default function Component() {
  const [value, setValue] = useState("")
  const [hasGuessed, setHasGuessed] = useState(undefined)
  const inputRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (hasGuessed) {
      closeButtonRef.current?.focus()
    }
  }, [hasGuessed])

  async function onSubmit(e) {
    e?.preventDefault?.()

    inputRef.current?.select()
    await new Promise((r) => setTimeout(r, 1_00))

    setHasGuessed(value === CORRECT_CODE)

    setValue("")
    setTimeout(() => {
      inputRef.current?.blur()
    }, 20)
  }

  return (
    <Dialog dir="ltr" >
      <DialogTrigger dir="ltr"  asChild>
        <Button className="hover:bg-transparent border-none shadow-none hover:text-white bg-transparent" variant="outline">انضم الى سلفة</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true">
            <svg
              className="stroke-zinc-800 dark:stroke-zinc-100"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              aria-hidden="true">
              <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
            </svg>
          </div>
    <DialogHeader>
            <DialogTitle className="sm:text-center">
              {hasGuessed ? "تم التحقق من الكود!" : "أدخل رمز الانضمام"}
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              {hasGuessed
                ? "تم التحقق من الرمز بنجاح، يمكنك الآن الدخول إلى السُلفة."
                : "أدخل رمز الانضمام المكوَّن من 4 أرقام الذي وصلك."}
            </DialogDescription>
          </DialogHeader>

        </div>

        {hasGuessed ? (
          <div className="text-center">
            <DialogClose asChild>
              <Button type="button" ref={closeButtonRef}>
                Close
              </Button>
            </DialogClose>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-center">
              <OTPInput
                id="cofirmation-code"
                ref={inputRef}
                value={value}
                onChange={setValue}
                containerClassName="flex items-center  gap-3 has-disabled:opacity-50"
                maxLength={4}
                onFocus={() => setHasGuessed(undefined)}
                render={({ slots }) => (
                  <div className="flex flex-row-reverse  gap-2">
                    {slots.map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>
                )}
                onComplete={onSubmit} />
            </div>
            {hasGuessed === false && (
              <p
                className="text-muted-foreground text-center text-xs"
                role="alert"
                aria-live="polite">
                Invalid code. Please try again.
              </p>
            )}
            {/* <p className="text-center text-sm">
              <a className="underline hover:no-underline" href="#">
                Resend code
              </a>
            </p> */}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Slot(props) {
  return (
    <div
      className={cn(
        "border-input bg-background  text-foreground flex size-9 items-center justify-center rounded-md border font-medium shadow-xs transition-[color,box-shadow]",
        { "border-ring ring-ring/50 z-10 ring-[3px]": props.isActive }
      )}>
      {props.char !== null && <div>{props.char}</div>}
    </div>
  );
}
