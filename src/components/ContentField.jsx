/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/?redirect=portal#installation/NoRgbANARATAdADjjK0EFYzoOzhgZmxhHxgAYwAWE/ShBcATmzJMvRgTDDIsc/BhSqKAFMAdqnwRQEEBDJylIALrR8AM3Ib8oqCqA===
 */

import { useState, useEffect, useRef, useMemo } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  DecoupledEditor,
  Autosave,
  Essentials,
  Paragraph,
  CloudServices,
  Autoformat,
  TextTransformation,
  LinkImage,
  Link,
  ImageBlock,
  ImageToolbar,
  BlockQuote,
  Bold,
  Bookmark,
  CKBox,
  ImageUpload,
  ImageInsert,
  ImageInsertViaUrl,
  AutoImage,
  PictureEditing,
  CKBoxImageEdit,
  CodeBlock,
  TableColumnResize,
  Table,
  TableToolbar,
  Emoji,
  Mention,
  PasteFromOffice,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  HorizontalLine,
  ImageCaption,
  ImageResize,
  ImageStyle,
  Indent,
  IndentBlock,
  Code,
  Italic,
  AutoLink,
  ListProperties,
  List,
  MediaEmbed,
  RemoveFormat,
  SpecialCharactersArrows,
  SpecialCharacters,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Subscript,
  Superscript,
  TableCaption,
  TableCellProperties,
  TableProperties,
  Alignment,
  TodoList,
  Underline,
  BalloonToolbar
} from 'ckeditor5';
import {
  AIChat,
  AIEditorIntegration,
  AIQuickActions,
  AIReviewMode,
  PasteFromOfficeEnhanced,
  FormatPainter,
  LineHeight,
  SlashCommand
} from 'ckeditor5-premium-features';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

// 📌 Task 1: Integrate AI Sidebar to the Editor - uncomment import
// import { useSidebar } from '../contexts/useSidebar';

// ✏️ removed: import './App.css'; - using only default styles

// ✏️ LOAD FROM ENVIRONMENT FILE
const LICENSE_KEY = import.meta.env.VITE_CKEDITOR_LICENSE_KEY;
const CLOUD_SERVICES_TOKEN_URL = import.meta.env.VITE_CKEDITOR_CLOUD_SERVICES_TOKEN_URL;

// ✏️ EXTEND THE INTERFACE OF THE COMPONENT AS NEEDED
export default function ContentField({
  contentKey,
  value = '',
  onChange,
}) {

  // 📌 Task 1: Integrate AI Sidebar to the Editor - load the reference to the Sidebar container ref
  // const { sidebarElement } = useSidebar();
  const editorContainerRef = useRef(null);
  const editorMenuBarRef = useRef(null);
  const editorToolbarRef = useRef(null);
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);

  const { editorConfig } = useMemo(() => {
    if (!isLayoutReady) {
      return {};
    }

    return {
      editorConfig: {
        toolbar: {
          items: [
            'undo',
            'redo',
            '|',
            // ⭐ TOOLBAR BUTTONS CONFIGURATION
            // 📌 Task 1: Integrate AI Sidebar to the Editor - comment toggleAI button in the app
            'toggleAi',
            'aiQuickActions',
            '|',
            'formatPainter',
            'findAndReplace',
            '|',
            'heading',
            '|',
            'fontSize',
            'fontFamily',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'subscript',
            'superscript',
            'code',
            'removeFormat',
            '|',
            'emoji',
            'specialCharacters',
            'horizontalLine',
            'link',
            'bookmark',
            'insertImage',
            'insertImageViaUrl',
            'ckbox',
            'mediaEmbed',
            'insertTable',
            'blockQuote',
            'codeBlock',
            '|',
            'alignment',
            'lineHeight',
            '|',
            'bulletedList',
            'numberedList',
            'todoList',
            'outdent',
            'indent'
          ],
          shouldNotGroupWhenFull: false
        },
        plugins: [
          // ⭐ AI CHAT PLUGINS
          AIChat,
          AIEditorIntegration,
          AIQuickActions,
          AIReviewMode,
          Alignment,
          Autoformat,
          AutoImage,
          AutoLink,
          Autosave,
          BalloonToolbar,
          BlockQuote,
          Bold,
          Bookmark,
          CKBox,
          CKBoxImageEdit,
          CloudServices,
          Code,
          CodeBlock,
          Emoji,
          Essentials,
          FindAndReplace,
          FontBackgroundColor,
          FontColor,
          FontFamily,
          FontSize,
          FormatPainter,
          Heading,
          HorizontalLine,
          ImageBlock,
          ImageCaption,
          ImageInsert,
          ImageInsertViaUrl,
          ImageResize,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          Indent,
          IndentBlock,
          Italic,
          LineHeight,
          Link,
          LinkImage,
          List,
          ListProperties,
          MediaEmbed,
          Mention,
          Paragraph,
          PasteFromOffice,
          PasteFromOfficeEnhanced,
          PictureEditing,
          RemoveFormat,
          SlashCommand,
          SpecialCharacters,
          SpecialCharactersArrows,
          SpecialCharactersCurrency,
          SpecialCharactersEssentials,
          SpecialCharactersLatin,
          SpecialCharactersMathematical,
          SpecialCharactersText,
          Strikethrough,
          Subscript,
          Superscript,
          Table,
          TableCaption,
          TableCellProperties,
          TableColumnResize,
          TableProperties,
          TableToolbar,
          TextTransformation,
          TodoList,
          Underline
        ],
        // ⭐ AI CONFIG
        ai: {
          container: {
            // 📌 Task 1: Integrate AI Sidebar to the Editor:
            // comment type and side and uncomment the rest of the block
            type: 'overlay',
            side: 'right'
            // type: 'sidebar',
            // element: sidebarElement,
            // side: 'right'

          },
          chat: {
            models: {
              // 📌 Task 2: Custom model selection - uncomment the block
              // defaultModelId: 'auto',
              // modelSelectorAlwaysVisible: true,
              // displayedModels: ['claude-4-5-sonnet', 'auto', 'claude-4-5-haiku', 'gpt-mini']
            },
            context: {
              document: {
                enabled: true
              },
              urls: {
                enabled: true
              },
              files: {
                enabled: true
              },
              // 📌 Task 3: Custom context sources - uncomment the block
              // sources: [
              //   {
              //     id: "guidelines",
              //     label: "Internal Guidelines",
              //     // sample resources
              //     getResources: async () => {
              //       const resources = [
              //         {
              //           id: 'email-styleguide',
              //           type: 'web-resource',
              //           label: 'Email Guidelines',
              //           data: 'https://gist.github.com/Simply007/0fb703584c932825e6ff691b9913d97e'
              //         },
              //         {
              //           id: 'content-guidelines',
              //           type: 'web-resource',
              //           label: 'Content Creation Guidelines',
              //           data: 'https://gist.github.com/Simply007/f254ef5eccd47169bcc6f5eefaa37620'
              //         }
              //       ];
              //       return Promise.resolve(resources);
              //     }
              //   },
              //   // More source groups can be added here
              // ],
            }
          },
          quickActions: {
            // 📌 Task 4: Custom quick actions - uncomment the block
            // extraCommands: [
            //   // An action that opens the AI Chat interface for interactive conversations.
            //   {
            //     id: 'expert-analysis-chat',
            //     displayedPrompt: 'Ask expert AI about this',
            //     prompt: 'You are an AI expert specialized in clear, practical explanations for non-technical users. Analyze the selected text, explain what it means in simple terms, point out any issues or unclear parts, and suggest specific improvements.',
            //     type: 'CHAT'
            //   },
            //   {
            //     id: 'enhance-by-links',
            //     displayedPrompt: 'Enhance by links',
            //     prompt: 'Analyze the selected text and suggest relevant links to important concepts, terms, or references found within it. Ensure the number of links is balanced and does not overwhelm the text—only link the most significant parts. Do not modify the original text, just provide the suggested links.',
            //     type: 'ACTION',
            //     model: 'claude-4-5-sonnet'
            //   },
            //   // ... More custom actions ...
            // ],
          },
          reviewMode: {
            // 📌 Task 5: Custom translation in review mode - uncomment the block
            // translations: [
            //   {
            //     id: 'polish',
            //     label: 'Polish'
            //   },
            //   {
            //     id: 'czech',
            //     label: 'Czech'
            //   }
            // ]
          },
        },
        // ⭐ BALLOON TOOLBAR FOR AI
        balloonToolbar: ['aiQuickActions', '|', 'bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
        cloudServices: {
          tokenUrl: CLOUD_SERVICES_TOKEN_URL
        },
        collaboration: {
          // ✏️ Identification of the document
          channelId: contentKey
        },
        fontFamily: {
          supportAllValues: true
        },
        fontSize: {
          options: [10, 12, 14, 'default', 18, 20, 22],
          supportAllValues: true
        },
        heading: {
          options: [
            {
              model: 'paragraph',
              title: 'Paragraph',
              class: 'ck-heading_paragraph'
            },
            {
              model: 'heading1',
              view: 'h1',
              title: 'Heading 1',
              class: 'ck-heading_heading1'
            },
            {
              model: 'heading2',
              view: 'h2',
              title: 'Heading 2',
              class: 'ck-heading_heading2'
            },
            {
              model: 'heading3',
              view: 'h3',
              title: 'Heading 3',
              class: 'ck-heading_heading3'
            },
            {
              model: 'heading4',
              view: 'h4',
              title: 'Heading 4',
              class: 'ck-heading_heading4'
            },
            {
              model: 'heading5',
              view: 'h5',
              title: 'Heading 5',
              class: 'ck-heading_heading5'
            },
            {
              model: 'heading6',
              view: 'h6',
              title: 'Heading 6',
              class: 'ck-heading_heading6'
            }
          ]
        },
        image: {
          toolbar: [
            'toggleImageCaption',
            '|',
            'imageStyle:alignBlockLeft',
            'imageStyle:block',
            'imageStyle:alignBlockRight',
            '|',
            'resizeImage',
            '|',
            'ckboxImageEdit'
          ],
          styles: {
            options: ['alignBlockLeft', 'block', 'alignBlockRight']
          }
        },
        // ✏️ REMOVED INITIAL DATA PROPERTY
        licenseKey: LICENSE_KEY,
        lineHeight: {
          supportAllValues: true
        },
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: 'https://',
          decorators: {
            toggleDownloadable: {
              mode: 'manual',
              label: 'Downloadable',
              attributes: {
                download: 'file'
              }
            }
          }
        },
        list: {
          properties: {
            styles: true,
            startIndex: true,
            reversed: true
          }
        },
        mention: {
          feeds: [
            {
              marker: '@',
              feed: [
                /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
              ]
            }
          ]
        },
        placeholder: 'Type or paste your content here!',
        table: {
          contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
        }
      }
    };
  }, [contentKey, isLayoutReady]);

  useEffect(() => {
    if (editorConfig) {
      configUpdateAlert(editorConfig);
    }
  }, [editorConfig]);

  return (
    <div className="main-container">
      <div className="editor-container editor-container_document-editor" ref={editorContainerRef}>
        <div className="editor-container__menu-bar" ref={editorMenuBarRef}></div>
        <div className="editor-container__toolbar" ref={editorToolbarRef}></div>
        <div className="editor-container__editor-wrapper">
          <div className="editor-container__editor">
            <div ref={editorRef}>
              {editorConfig && (
                <CKEditor
                  onReady={editor => {
                    editorToolbarRef.current.appendChild(editor.ui.view.toolbar.element);
                    editorMenuBarRef.current.appendChild(editor.ui.view.menuBarView.element);
                  }}
                  onAfterDestroy={() => {
                    Array.from(editorToolbarRef.current.children).forEach(child => child.remove());
                    Array.from(editorMenuBarRef.current.children).forEach(child => child.remove());
                  }}
                  // ✏️ ADDED IDENTIFICATION FOR PROPER RELOADING
                  key={contentKey}
                  editor={DecoupledEditor}
                  config={editorConfig}
                  // ✏️ ADDED INITIAL DATA FROM PROP
                  data={value}
                  // ✏️ ON CHANGE HANDLER - usually you should use AUTOSAVE plugin instead
                  onChange={(_event, editor) => {
                    const data = editor.getData();
                    onChange(data);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * This function exists to remind you to update the config needed for premium features.
 * The function can be safely removed. Make sure to also remove call to this function when doing so.
 */
function configUpdateAlert(config) {
  if (configUpdateAlert.configUpdateAlertShown) {
    return;
  }

  const isModifiedByUser = (currentValue, forbiddenValue) => {
    if (currentValue === forbiddenValue) {
      return false;
    }

    if (currentValue === undefined) {
      return false;
    }

    return true;
  };

  const valuesToUpdate = [];

  configUpdateAlert.configUpdateAlertShown = true;

  if (!isModifiedByUser(config.licenseKey, '<YOUR_LICENSE_KEY>')) {
    valuesToUpdate.push('LICENSE_KEY');
  }

  if (!isModifiedByUser(config.cloudServices?.tokenUrl, '<YOUR_CLOUD_SERVICES_TOKEN_URL>')) {
    valuesToUpdate.push('CLOUD_SERVICES_TOKEN_URL');
  }

  if (valuesToUpdate.length) {
    window.alert(
      [
        'Please update the following values in your editor config',
        'to receive full access to Premium Features:',
        '',
        ...valuesToUpdate.map(value => ` - ${value}`)
      ].join('\n')
    );
  }
}