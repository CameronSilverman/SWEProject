"use client"

import * as React from "react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { User, Settings, HelpCircle, LogOut } from 'lucide-react'

export function ProfileDropdown({
	firstName,
	lastName
}: {
	firstName: string;
	lastName: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-12 w-12 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/avatars/01.png" alt="@johndoe" />
            <AvatarFallback className="text-lg font-semibold">
						{`${firstName} ${lastName}`
							.split(' ')
							.map(n => n[0])
							.join('')}
					</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuItem asChild>
          <Link href="/core/profile" className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/core/project/create" className="flex items-center">
            <Settings className="mr-2 h-4 w-4" />
            <span>Create Project</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/core/issue/create" className="flex items-center">
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Create Issue</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/logout" className="flex items-center text-red-600">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}