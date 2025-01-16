import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { useState } from "react";

const LoginPage = () => {

    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = () => {
        alert(`Username: ${inputUsername} | Password: ${inputPassword}`)
    }

    return (
        <main className=" px-4 container py-8 flex flex-col justify-center items-center max-w-screen-md h-[80vh]"> 
            <Card className=" max-w-[540px]">
                <CardHeader>
                    <CardTitle>
                        Welcome Back
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-center items-center gap-2">
                    <div>
                        <Label htmlFor="username">Username</Label>
                        <Input onChange={(event) => {setInputUsername(event.target.value)}} type="email" id="username"/>
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input onChange={(event) => {setInputPassword(event.target.value)}} type={isChecked ? "text" : "password"} id="password"/>
                    </div>
                    <div className="flex items-centerspace-x-2">
                        <Checkbox onCheckedChange={(checked) => setIsChecked(checked)} id="show-password"/>
                        <Label htmlFor="show-password">Show Password</Label>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="flex flex-col space-y-4 w-full">
                        <button onClick={handleSubmit} >Login</button>
                        <button className="w-full" variant="link">Sign Up</button>
                    </div>
                </CardFooter>
            </Card>
        </main>
    )
}

export default LoginPage;