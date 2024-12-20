import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import "./Auth.scss"
import { signUptoDb } from "../../services/api/api"

import { UserData } from "../../types/Player"

export function SignUp() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { signUp } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      const response = await signUp(email, password)

      const actualData: UserData = {
        id: response!.id,
        email: email,
        username: username,
      }
      await signUptoDb(actualData)

      alert("Check your email for the confirmation link!")
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An error occurred",
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h2 className="auth-title">Create Account</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div
          className="input-group animate-slide-in"
          style={{ animationDelay: "200ms" }}
        >
          <label htmlFor="signup-username" className="input-label">
            Username
          </label>
          <input
            id="signup-username"
            type="username"
            className="auth-input"
            placeholder="Add a Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div
          className="input-group animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <label htmlFor="signup-email" className="input-label">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            className="auth-input"
            placeholder="CodeBrews@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div
          className="input-group animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <label htmlFor="signup-password" className="input-label">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            className="auth-input"
            placeholder="Add your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button
          type="submit"
          className="auth-button animate-fade-in-up"
          disabled={loading}
          style={{ animationDelay: "600ms" }}
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>
      </form>
    </>
  )
}
