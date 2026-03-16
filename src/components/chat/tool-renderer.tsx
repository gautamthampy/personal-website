import ChatPresentation from './tools/chat-presentation';
import ChatProjects from './tools/chat-projects';
import ChatSkills from './tools/chat-skills';
import ChatContact from './tools/chat-contact';
import ChatInternship from './tools/chat-internship';
import ChatResume from './tools/chat-resume';
import ChatAchievements from './tools/chat-achievements';
import ChatCrazy from './tools/chat-crazy';

interface ToolRendererProps {
  toolInvocations: any[];
  messageId: string;
}

export default function ToolRenderer({ toolInvocations }: ToolRendererProps) {
  return (
    <div className="w-full">
      {toolInvocations.map((tool) => {
        const { toolCallId, toolName } = tool;

        switch (toolName) {
          case 'getPresentation':
            return <ChatPresentation key={toolCallId} data={tool.result} />;
          case 'getProjects':
            return <ChatProjects key={toolCallId} data={tool.result} />;
          case 'getSkills':
            return <ChatSkills key={toolCallId} data={tool.result} />;
          case 'getContact':
            return <ChatContact key={toolCallId} data={tool.result} />;
          case 'getInternship':
            return <ChatInternship key={toolCallId} data={tool.result} />;
          case 'getResume':
            return <ChatResume key={toolCallId} />;
          case 'getSport':
            return <ChatAchievements key={toolCallId} data={tool.result} />;
          case 'getCrazy':
            return <ChatCrazy key={toolCallId} data={tool.result} />;
          default:
            return (
              <div key={toolCallId} className="bg-[#141414] border border-[#262626] rounded-xl p-4 text-sm text-[#a8a29e] font-mono">
                <pre>{JSON.stringify(tool.result, null, 2)}</pre>
              </div>
            );
        }
      })}
    </div>
  );
}
