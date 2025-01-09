import React from 'react';
import { Search, Send } from 'lucide-react';

const conversations = [
  {
    id: 1,
    name: 'John Doe',
    lastMessage: 'Thank you for the prescription, doctor.',
    time: '5m ago',
    unread: 2,
  },
  {
    id: 2,
    name: 'Jane Smith',
    lastMessage: 'When should I schedule my next appointment?',
    time: '1h ago',
    unread: 0,
  },
  // Add more conversations
];

function Messages() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Messages</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm flex h-[calc(100vh-180px)]">
        {/* Conversations List */}
        <div className="w-1/3 border-r">
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="divide-y">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className="p-4 hover:bg-gray-50 cursor-pointer flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-medium">
                    {conversation.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {conversation.name}
                    </h3>
                    <p className="text-xs text-gray-500">{conversation.time}</p>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {conversation.lastMessage}
                  </p>
                </div>
                {conversation.unread > 0 && (
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white">{conversation.unread}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-medium">JD</span>
            </div>
            <div>
              <h3 className="font-medium">John Doe</h3>
              <p className="text-sm text-gray-500">Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
                <p className="text-sm">Thank you for the prescription, doctor.</p>
                <span className="text-xs text-gray-500">10:30 AM</span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-50 rounded-lg p-3 max-w-[70%]">
                <p className="text-sm">You're welcome! Remember to take it as prescribed.</p>
                <span className="text-xs text-gray-500">10:31 AM</span>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;