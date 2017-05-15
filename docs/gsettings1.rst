Settings
========

gsettings1
**********

.. literalinclude:: src/gsettings1-example/gsettings-example.gschema.xml
   :caption: /usr/share/glib-2.0/schemas/gsettings-example.gschema.xml

.. code-block:: shell

   glib-compile-schemas /usr/share/glib-2.0/schemas/

.. literalinclude:: src/gsettings1-example/extension.js
   :language: javascript
   :caption: ~/.local/share/gnome-shell/extensions/gsettings1-example/extension.js

.. literalinclude:: src/gsettings1-example/metadata.json
   :language: javascript
   :caption: ~/.local/share/gnome-shell/extensions/gsettings1-example/metadata.json

.. code-block:: shell

   dconf-editor

.. image:: src/gsettings1-example/gsettings1-dconf-editor.png

.. code-block:: shell
   :caption: /var/log/kern.log

   JS LOG: ===== gsettings1 Example =====
   JS LOG: 100
 
