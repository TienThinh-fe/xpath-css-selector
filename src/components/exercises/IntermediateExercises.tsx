import React from 'react'
import type { ExerciseComponentProps } from '../../types'

// Exercise 6: Nth-child selection
export const Exercise6: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Data Table</h3>
        <div className="max-w-lg mx-auto">
          <table className="w-full bg-white border rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">Admin</td>
                <td className="px-4 py-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                    Active
                  </span>
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Jane Smith</td>
                <td className="px-4 py-2">User</td>
                <td className="px-4 py-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                    Active
                  </span>
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">Bob Johnson</td>
                <td className="px-4 py-2">User</td>
                <td className="px-4 py-2">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded">
                    Inactive
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// Exercise 7: Descendant selection
export const Exercise7: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Settings Panel</h3>
        <div className="max-w-md mx-auto bg-white border rounded-lg p-6 shadow-sm">
          <div className="settings-section">
            <h4 className="font-semibold mb-3">Notifications</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  id="email-notifications"
                  name="email-notifications"
                  type="checkbox"
                  className="mr-2"
                />
                <span>Email notifications</span>
              </label>
              <label className="flex items-center">
                <input
                  id="push-notifications"
                  name="push-notifications"
                  type="checkbox"
                  className="mr-2"
                  defaultChecked
                />
                <span>Push notifications</span>
              </label>
            </div>
          </div>
          <div className="settings-section mt-6">
            <h4 className="font-semibold mb-3">Privacy</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  id="profile-visibility"
                  name="profile-visibility"
                  type="checkbox"
                  className="mr-2"
                  defaultChecked
                />
                <span>Profile visibility</span>
              </label>
              <label className="flex items-center">
                <input
                  id="data-sharing"
                  name="data-sharing"
                  type="checkbox"
                  className="mr-2"
                />
                <span>Data sharing</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Exercise 8: Contains attribute
export const Exercise8: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">File Manager</h3>
        <div className="max-w-md mx-auto bg-white border rounded-lg p-6 shadow-sm">
          <div className="space-y-2">
            <div className="flex items-center p-2 hover:bg-gray-50 rounded">
              <span className="file-icon mr-3">📄</span>
              <span className="file-name" data-type="document">
                report.pdf
              </span>
            </div>
            <div className="flex items-center p-2 hover:bg-gray-50 rounded">
              <span className="file-icon mr-3">🖼️</span>
              <span className="file-name" data-type="image">
                photo.jpg
              </span>
            </div>
            <div className="flex items-center p-2 hover:bg-gray-50 rounded">
              <span className="file-icon mr-3">📊</span>
              <span className="file-name" data-type="spreadsheet">
                data.xlsx
              </span>
            </div>
            <div className="flex items-center p-2 hover:bg-gray-50 rounded">
              <span className="file-icon mr-3">📄</span>
              <span className="file-name" data-type="document">
                presentation.pptx
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Exercise 9: Multiple class selection
export const Exercise9: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Status Dashboard</h3>
        <div className="max-w-lg mx-auto grid grid-cols-2 gap-4">
          <div className="status-card bg-white border rounded-lg p-4 shadow-sm">
            <div className="status-indicator success"></div>
            <h4 className="font-semibold">Database</h4>
            <p className="text-green-600">Online</p>
          </div>
          <div className="status-card bg-white border rounded-lg p-4 shadow-sm">
            <div className="status-indicator warning"></div>
            <h4 className="font-semibold">API Server</h4>
            <p className="text-yellow-600">Degraded</p>
          </div>
          <div className="status-card bg-white border rounded-lg p-4 shadow-sm">
            <div className="status-indicator error"></div>
            <h4 className="font-semibold">Cache</h4>
            <p className="text-red-600">Offline</p>
          </div>
          <div className="status-card bg-white border rounded-lg p-4 shadow-sm">
            <div className="status-indicator success active"></div>
            <h4 className="font-semibold">Load Balancer</h4>
            <p className="text-green-600">Online</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Exercise 10: Sibling selection
export const Exercise10: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Form Validation</h3>
        <form className="max-w-md mx-auto bg-white border rounded-lg p-6 shadow-sm">
          <div className="form-group mb-4">
            <label
              htmlFor="register-username"
              className="block text-sm font-medium mb-1"
            >
              Username
            </label>
            <input
              id="register-username"
              name="username"
              type="text"
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
            <div className="error-message text-red-600 text-sm mt-1 hidden">
              Username is required
            </div>
          </div>
          <div className="form-group mb-4">
            <label
              htmlFor="register-email"
              className="block text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              id="register-email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
            <div className="error-message text-red-600 text-sm mt-1">
              Please enter a valid email address
            </div>
          </div>
          <div className="form-group mb-4">
            <label
              htmlFor="register-password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              id="register-password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 border rounded-lg"
            />
            <div className="error-message text-red-600 text-sm mt-1 hidden">
              Password is required
            </div>
          </div>
          <button
            id="register-submit"
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
