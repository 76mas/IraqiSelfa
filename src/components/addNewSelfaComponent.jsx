"use client"

import { useId, useRef, useState } from "react"
import { CheckIcon, CopyIcon, UserRoundPlusIcon } from "lucide-react"
import { FiPlus } from "react-icons/fi";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Component() {
  const id = useId()
  const [information, setInformation] = useState([
    {nsme:"اسم السلفة",value:"",placeholder:"مثلا سلفة الاصدقاء",type:"text"}
    ,{nsme:"عدد الاعضاء",value:"",placeholder:"مثلا 10",type:"number"}
    ,{nsme:"مقدار الدفع",value:"",placeholder:"مثلا  100,000",type:"number"}
  ])
  const [copied, setCopied] = useState(false)
  const inputRef = useRef(null)
  const lastInputRef = useRef(null)

  const addEmail = () => {
    setEmails([...emails, ""])
  }

const handleEmailChange = (index, value) => {
  const updated = [...information]
  updated[index].value = value
  setInformation(updated)
}


  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>

      <Button className="cssbuttons-io-button">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
        </svg>
        <span>اضف سلفة</span>
      </Button>


 </DialogTrigger>
      <DialogContent
        onOpenAutoFocus={(e) => {
          e.preventDefault()
          lastInputRef.current?.focus()
        }}>
        <div className="flex flex-col gap-2">
          <div
            className="flex left-3 absolute size-11 shrink-0 items-center mb-4   justify-center rounded-full border"
            aria-hidden="true">
            <UserRoundPlusIcon className="opacity-80" size={16} />
          </div>
      <DialogHeader className="mt-10">
              <DialogTitle className="text-right">إعدادات السُلَفة</DialogTitle>
              <DialogDescription className="text-right">
                قم بإدخال معلومات السُلَفة مثل اسمها، عدد الأعضاء، ومقدار الدفع الشهري.
              </DialogDescription>
      </DialogHeader>

        </div>

        <form className="space-y-5">
          <div className="space-y-4">
            <div className="*:not-first:mt-2">
              {/* <Label>اعدادات السلفة</Label> */}
              <div className="space-y-3">
                {information.map((info, index) => (
                  <>

                 <label  key={`label-${index}`}className="text-black mb-[20px]">{info.nsme}</label>
                      <Input
                        key={`input-${index}`}
                        id={`team-email-${index + 1}`}
                        placeholder={info.placeholder}
                        type={info.type}
                        value={info.value}
                        onChange={(e) => handleEmailChange(index, e.target.value)}
                        ref={index === information.length - 1 ? lastInputRef : undefined} />
                 
                
                  </>
                ))}
              </div>
            </div>
       
          </div>
          <Button type="button" className="w-full cursor-pointer bg-green-700 hover:bg-green-950">
            تم
          </Button>
        </form>

        <hr className="my-1 border-t" />


{/* نسخ الكود */}
        {/* <div className="*:not-first:mt-2">
          <Label htmlFor={id}>Invite via magic link</Label>
          <div className="relative">
            <Input
              ref={inputRef}
              id={id}
              className="pe-9"
              type="text"
              defaultValue="https://originui.com/refer/87689"
              readOnly />
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={handleCopy}
                    className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed"
                    aria-label={copied ? "Copied" : "Copy to clipboard"}
                    disabled={copied}>
                    <div
                      className={cn("transition-all", copied ? "scale-100 opacity-100" : "scale-0 opacity-0")}>
                      <CheckIcon className="stroke-emerald-500" size={16} aria-hidden="true" />
                    </div>
                    <div
                      className={cn(
                        "absolute transition-all",
                        copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
                      )}>
                      <CopyIcon size={16} aria-hidden="true" />
                    </div>
                  </button>
                </TooltipTrigger>

                <TooltipContent className="px-2 py-1 text-xs">
                  انسخ الكود
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div> */}
{/* نسخ الكود */}

      </DialogContent>
    </Dialog>
  );
}
