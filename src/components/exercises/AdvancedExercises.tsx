import React from 'react'
import type { ExerciseComponentProps } from '../../types'

// Exercise 11-20: Advanced exercises
export const Exercise11: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Dynamic Content</h3>
        <div className="max-w-lg mx-auto">
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="content-section" data-loaded="true">
              <h4 className="font-semibold mb-3">Latest News</h4>
              <div className="news-item mb-3" data-priority="high">
                <h5 className="font-medium">Breaking: New Product Launch</h5>
                <p className="text-gray-600 text-sm">Published 2 hours ago</p>
              </div>
              <div className="news-item mb-3" data-priority="medium">
                <h5 className="font-medium">Company Quarterly Results</h5>
                <p className="text-gray-600 text-sm">Published 1 day ago</p>
              </div>
              <div className="news-item" data-priority="low">
                <h5 className="font-medium">Office Holiday Schedule</h5>
                <p className="text-gray-600 text-sm">Published 3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Exercise12: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Shopping Cart</h3>
        <div className="max-w-lg mx-auto bg-white border rounded-lg p-6 shadow-sm">
          <div className="cart-items space-y-4">
            <div className="cart-item flex justify-between items-center p-3 border rounded">
              <div>
                <h5 className="font-medium">Wireless Headphones</h5>
                <p className="text-sm text-gray-600">SKU: WH-001</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  id="qty-minus-1"
                  className="quantity-btn minus bg-gray-200 px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="quantity">2</span>
                <button
                  id="qty-plus-1"
                  className="quantity-btn plus bg-gray-200 px-2 py-1 rounded"
                >
                  +
                </button>
                <button id="remove-1" className="remove-btn text-red-600 ml-4">
                  Remove
                </button>
              </div>
            </div>
            <div className="cart-item flex justify-between items-center p-3 border rounded">
              <div>
                <h5 className="font-medium">USB Cable</h5>
                <p className="text-sm text-gray-600">SKU: USB-002</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  id="qty-minus-2"
                  className="quantity-btn minus bg-gray-200 px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="quantity">1</span>
                <button
                  id="qty-plus-2"
                  className="quantity-btn plus bg-gray-200 px-2 py-1 rounded"
                >
                  +
                </button>
                <button id="remove-2" className="remove-btn text-red-600 ml-4">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="cart-total mt-6 pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total: $89.99</span>
              <button
                id="checkout"
                className="checkout-btn bg-green-600 text-white px-4 py-2 rounded"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Exercise13: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Modal Dialog</h3>
        <div className="max-w-md mx-auto">
          <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">
            Open Dialog
          </button>
          <div className="modal-overlay bg-black bg-opacity-50 p-8">
            <div className="modal-content bg-white rounded-lg p-6 max-w-sm mx-auto">
              <div className="modal-header flex justify-between items-center mb-4">
                <h4 className="font-semibold">Confirm Action</h4>
                <button className="modal-close text-gray-500 hover:text-gray-700">
                  ×
                </button>
              </div>
              <div className="modal-body mb-6">
                <p>
                  Are you sure you want to delete this item? This action cannot
                  be undone.
                </p>
              </div>
              <div className="modal-footer flex justify-end space-x-2">
                <button className="cancel-btn bg-gray-200 text-gray-800 px-4 py-2 rounded">
                  Cancel
                </button>
                <button className="confirm-btn bg-red-600 text-white px-4 py-2 rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Exercise14: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Multi-step Form</h3>
        <div className="max-w-lg mx-auto bg-white border rounded-lg p-6 shadow-sm">
          <div className="step-indicator flex justify-between mb-6">
            <div className="step completed" data-step="1">
              <div className="step-number bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                1
              </div>
              <span className="step-label text-sm mt-1">Personal</span>
            </div>
            <div className="step active" data-step="2">
              <div className="step-number bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                2
              </div>
              <span className="step-label text-sm mt-1">Address</span>
            </div>
            <div className="step" data-step="3">
              <div className="step-number bg-gray-300 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center">
                3
              </div>
              <span className="step-label text-sm mt-1">Payment</span>
            </div>
          </div>
          <div className="step-content">
            <h4 className="font-semibold mb-4">Address Information</h4>
            <div className="space-y-3">
              <input
                id="address-street"
                name="street"
                type="text"
                placeholder="Street Address"
                className="w-full px-3 py-2 border rounded"
              />
              <input
                id="address-city"
                name="city"
                type="text"
                placeholder="City"
                className="w-full px-3 py-2 border rounded"
              />
              <input
                id="address-zip"
                name="zipcode"
                type="text"
                placeholder="ZIP Code"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>
          <div className="step-navigation flex justify-between mt-6">
            <button
              id="prev-step"
              className="prev-btn bg-gray-200 px-4 py-2 rounded"
            >
              Previous
            </button>
            <button
              id="next-step"
              className="next-btn bg-blue-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Exercise15: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Complex Table</h3>
        <div className="max-w-4xl mx-auto">
          <table className="w-full bg-white border rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">
                  <input
                    id="select-all"
                    name="select-all"
                    type="checkbox"
                    className="select-all"
                  />
                </th>
                <th className="px-4 py-2 text-left sortable" data-sort="name">
                  Name <span className="sort-icon">↕️</span>
                </th>
                <th className="px-4 py-2 text-left sortable" data-sort="email">
                  Email <span className="sort-icon">↕️</span>
                </th>
                <th className="px-4 py-2 text-left sortable" data-sort="role">
                  Role <span className="sort-icon">↕️</span>
                </th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:bg-gray-50" data-user-id="1">
                <td className="px-4 py-2">
                  <input
                    id="row-select-1"
                    name="row-select-1"
                    type="checkbox"
                    className="row-select"
                  />
                </td>
                <td className="px-4 py-2">Alice Johnson</td>
                <td className="px-4 py-2">alice@example.com</td>
                <td className="px-4 py-2">
                  <span className="role-badge admin bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    Admin
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button
                    id="edit-1"
                    className="action-btn edit text-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    id="delete-1"
                    className="action-btn delete text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="border-t hover:bg-gray-50" data-user-id="2">
                <td className="px-4 py-2">
                  <input
                    id="row-select-2"
                    name="row-select-2"
                    type="checkbox"
                    className="row-select"
                  />
                </td>
                <td className="px-4 py-2">Bob Smith</td>
                <td className="px-4 py-2">bob@example.com</td>
                <td className="px-4 py-2">
                  <span className="role-badge user bg-green-100 text-green-800 px-2 py-1 rounded">
                    User
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button
                    id="edit-2"
                    className="action-btn edit text-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    id="delete-2"
                    className="action-btn delete text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// Exercise 16-20 would continue with more complex scenarios...
export const Exercise16: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Nested Navigation</h3>
        <nav className="max-w-md mx-auto bg-white border rounded-lg shadow-sm">
          <ul className="menu-list">
            <li className="menu-item">
              <a
                href="#"
                className="menu-link flex items-center justify-between p-3 hover:bg-gray-50"
              >
                <span>Dashboard</span>
              </a>
            </li>
            <li className="menu-item has-submenu">
              <a
                href="#"
                className="menu-link flex items-center justify-between p-3 hover:bg-gray-50"
              >
                <span>Products</span>
                <span className="submenu-arrow">▼</span>
              </a>
              <ul className="submenu bg-gray-50">
                <li>
                  <a
                    href="#"
                    className="submenu-link block p-2 pl-6 hover:bg-gray-100"
                  >
                    All Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="submenu-link block p-2 pl-6 hover:bg-gray-100"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="submenu-link featured block p-2 pl-6 hover:bg-gray-100"
                  >
                    Featured
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a
                href="#"
                className="menu-link flex items-center justify-between p-3 hover:bg-gray-50"
              >
                <span>Orders</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export const Exercise17: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Calendar Widget</h3>
        <div className="max-w-md mx-auto bg-white border rounded-lg shadow-sm p-4">
          <div className="calendar-header flex justify-between items-center mb-4">
            <button className="nav-btn prev">‹</button>
            <h4 className="month-year font-semibold">December 2024</h4>
            <button className="nav-btn next">›</button>
          </div>
          <div className="calendar-grid grid grid-cols-7 gap-1 text-center">
            <div className="day-header font-medium text-gray-600 py-2">Su</div>
            <div className="day-header font-medium text-gray-600 py-2">Mo</div>
            <div className="day-header font-medium text-gray-600 py-2">Tu</div>
            <div className="day-header font-medium text-gray-600 py-2">We</div>
            <div className="day-header font-medium text-gray-600 py-2">Th</div>
            <div className="day-header font-medium text-gray-600 py-2">Fr</div>
            <div className="day-header font-medium text-gray-600 py-2">Sa</div>

            <div className="day other-month text-gray-400 p-2">29</div>
            <div className="day other-month text-gray-400 p-2">30</div>
            <div className="day other-month text-gray-400 p-2">31</div>
            <div className="day current-month p-2 hover:bg-blue-100 cursor-pointer">
              1
            </div>
            <div className="day current-month p-2 hover:bg-blue-100 cursor-pointer">
              2
            </div>
            <div className="day current-month p-2 hover:bg-blue-100 cursor-pointer">
              3
            </div>
            <div className="day current-month p-2 hover:bg-blue-100 cursor-pointer">
              4
            </div>

            <div className="day current-month p-2 hover:bg-blue-100 cursor-pointer">
              5
            </div>
            <div className="day current-month p-2 hover:bg-blue-100 cursor-pointer">
              6
            </div>
            <div className="day current-month p-2 hover:bg-blue-100 cursor-pointer">
              7
            </div>
            <div className="day current-month p-2 hover:bg-blue-100 cursor-pointer">
              8
            </div>
            <div className="day current-month p-2 hover:bg-blue-100 cursor-pointer">
              9
            </div>
            <div className="day current-month p-2 hover:bg-blue-100 cursor-pointer">
              10
            </div>
            <div className="day current-month p-2 hover:bg-blue-100 cursor-pointer">
              11
            </div>

            <div className="day current-month p-2 hover:bg-blue-100 cursor-pointer">
              12
            </div>
            <div className="day current-month p-2 hover:bg-blue-100 cursor-pointer">
              13
            </div>
            <div className="day current-month p-2 hover:bg-blue-100 cursor-pointer">
              14
            </div>
            <div className="day current-month today bg-blue-600 text-white p-2 rounded cursor-pointer">
              15
            </div>
            <div className="day current-month p-2 hover:bg-blue-100 cursor-pointer">
              16
            </div>
            <div className="day current-month p-2 hover:bg-blue-100 cursor-pointer">
              17
            </div>
            <div className="day current-month p-2 hover:bg-blue-100 cursor-pointer">
              18
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Exercise18: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Rich Text Editor</h3>
        <div className="max-w-lg mx-auto bg-white border rounded-lg shadow-sm">
          <div className="toolbar border-b p-2 flex space-x-1">
            <button
              className="tool-btn bold bg-gray-100 p-2 rounded"
              data-command="bold"
              title="Bold"
            >
              <strong>B</strong>
            </button>
            <button
              className="tool-btn italic bg-gray-100 p-2 rounded"
              data-command="italic"
              title="Italic"
            >
              <em>I</em>
            </button>
            <button
              className="tool-btn underline bg-gray-100 p-2 rounded"
              data-command="underline"
              title="Underline"
            >
              <u>U</u>
            </button>
            <div className="separator border-l mx-2"></div>
            <button
              className="tool-btn align-left bg-gray-100 p-2 rounded"
              data-command="justifyLeft"
              title="Align Left"
            >
              ≡
            </button>
            <button
              className="tool-btn align-center bg-gray-100 p-2 rounded"
              data-command="justifyCenter"
              title="Center"
            >
              ≣
            </button>
            <button
              className="tool-btn link bg-gray-100 p-2 rounded"
              data-command="createLink"
              title="Insert Link"
            >
              🔗
            </button>
          </div>
          <div
            className="editor-content p-4 min-h-32 border-0 outline-none"
            contentEditable
          >
            <p>Start typing your content here...</p>
          </div>
          <div className="editor-footer border-t p-2 flex justify-between items-center text-sm text-gray-600">
            <span className="word-count">Words: 6</span>
            <button className="save-btn bg-blue-600 text-white px-3 py-1 rounded text-sm">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Exercise19: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">
          Dynamic List with Filtering
        </h3>
        <div className="max-w-lg mx-auto bg-white border rounded-lg shadow-sm p-6">
          <div className="filter-controls mb-4 space-y-2">
            <input
              id="search-input"
              name="search"
              type="text"
              placeholder="Search items..."
              className="search-input w-full px-3 py-2 border rounded"
            />
            <div className="filter-buttons flex space-x-2">
              <button
                id="filter-all"
                className="filter-btn active bg-blue-600 text-white px-3 py-1 rounded text-sm"
                data-filter="all"
              >
                All
              </button>
              <button
                id="filter-completed"
                className="filter-btn bg-gray-200 px-3 py-1 rounded text-sm"
                data-filter="completed"
              >
                Completed
              </button>
              <button
                id="filter-pending"
                className="filter-btn bg-gray-200 px-3 py-1 rounded text-sm"
                data-filter="pending"
              >
                Pending
              </button>
            </div>
          </div>
          <div className="item-list space-y-2">
            <div
              className="list-item flex items-center justify-between p-3 border rounded"
              data-status="completed"
            >
              <div className="flex items-center">
                <input
                  id="task-1"
                  name="task-1"
                  type="checkbox"
                  checked
                  className="mr-3"
                />
                <span className="item-text line-through text-gray-500">
                  Complete project documentation
                </span>
              </div>
              <span className="status-badge completed bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                Done
              </span>
            </div>
            <div
              className="list-item flex items-center justify-between p-3 border rounded"
              data-status="pending"
            >
              <div className="flex items-center">
                <input
                  id="task-2"
                  name="task-2"
                  type="checkbox"
                  className="mr-3"
                />
                <span className="item-text">Review code changes</span>
              </div>
              <span className="status-badge pending bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                Pending
              </span>
            </div>
            <div
              className="list-item flex items-center justify-between p-3 border rounded"
              data-status="pending"
            >
              <div className="flex items-center">
                <input
                  id="task-3"
                  name="task-3"
                  type="checkbox"
                  className="mr-3"
                />
                <span className="item-text">Update user interface</span>
              </div>
              <span className="status-badge pending bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                Pending
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Exercise20: React.FC<ExerciseComponentProps> = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-medium mb-4">Advanced Dashboard</h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="widget stats-widget bg-white border rounded-lg p-4 shadow-sm">
            <div className="widget-header flex justify-between items-center mb-3">
              <h4 className="widget-title font-semibold">Sales</h4>
              <button className="widget-menu text-gray-400">⋮</button>
            </div>
            <div className="widget-content">
              <div className="stat-value text-2xl font-bold text-green-600">
                $12,453
              </div>
              <div className="stat-change text-sm text-green-600">
                +12.5% from last month
              </div>
            </div>
          </div>

          <div className="widget chart-widget bg-white border rounded-lg p-4 shadow-sm">
            <div className="widget-header flex justify-between items-center mb-3">
              <h4 className="widget-title font-semibold">Traffic</h4>
              <select className="chart-period text-sm border rounded px-2 py-1">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
              </select>
            </div>
            <div className="chart-placeholder bg-gray-100 h-24 rounded flex items-center justify-center text-gray-500">
              Chart Area
            </div>
          </div>

          <div className="widget activity-widget bg-white border rounded-lg p-4 shadow-sm">
            <div className="widget-header mb-3">
              <h4 className="widget-title font-semibold">Recent Activity</h4>
            </div>
            <div className="activity-list space-y-2">
              <div
                className="activity-item flex items-center text-sm"
                data-timestamp="2024-12-15T10:30:00"
              >
                <div className="activity-icon bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                  📊
                </div>
                <span className="activity-text">New report generated</span>
              </div>
              <div
                className="activity-item flex items-center text-sm"
                data-timestamp="2024-12-15T09:15:00"
              >
                <div className="activity-icon bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                  ✅
                </div>
                <span className="activity-text">Task completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
