<!-- @migration-task Error while migrating Svelte code: Can only bind to an Identifier or MemberExpression or a `{get, set}` pair
https://svelte.dev/e/bind_invalid_expression -->
<script lang="ts">
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
  export let items: {
    title: string;
    fields: { label: string; value: string | boolean; editable?: boolean }[];
    timestamps?: { createdAt: Date; updatedAt: Date } | null;
    onUpdate?: (updatedFields: { label: string; value: string | boolean }[]) => void;
  }[] = [];

  // Function to handle input changes
  const handleInputChange = (itemIndex: number, fieldIndex: number, newValue: string | boolean) => {
    const item = items[itemIndex];
    const updatedFields = [...item.fields];
    updatedFields[fieldIndex].value = newValue;

    // Update item fields
    if (item.onUpdate) {
      item.onUpdate(updatedFields);
    }
  };
</script>

<Accordion class="card p-4 text-token">
  {#each items as { title, fields, timestamps, onUpdate }, itemIndex}
    <AccordionItem>
      <!-- Slot for lead (optional icon or visual element) -->
      <svelte:fragment slot="lead">
        <i class="fa-solid fa-circle-info text-xl w-6 text-center"></i>
      </svelte:fragment>

      <!-- Slot for summary (accordion header content) -->
      <svelte:fragment slot="summary">
        <p class="font-bold">{title}</p>
      </svelte:fragment>

      <!-- Slot for content (accordion panel content) -->
      <svelte:fragment slot="content">
        <div class="space-y-4">
          {#each fields as { label, value, editable = true }, fieldIndex}
            <div>
              <label class="text-sm text-secondary">{label}:</label>
              {#if typeof value === 'boolean'}
                <!-- Checkbox for boolean values -->
                <input
                  type="checkbox"
                  class="ml-2"
                  bind:checked={fields[fieldIndex].value as boolean}
                  on:change={(e) => handleInputChange(itemIndex, fieldIndex, e.target.checked)}
                  disabled={!editable}
                />
              {:else}
                <!-- Text input for string values -->
                <input
                  type="text"
                  class="mt-1 w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-primary focus:border-primary"
                  value={String(value)}
                  on:input={(e) => handleInputChange(itemIndex, fieldIndex, e.target.value)}
                  disabled={!editable}
                />
              {/if}
            </div>
          {/each}

          <!-- Timestamps -->
          {#if timestamps}
            <div class="text-xs text-secondary-content mt-4">
              <p>Created At: {timestamps.createdAt.toLocaleDateString()}</p>
              <p>Updated At: {timestamps.updatedAt.toLocaleDateString()}</p>
            </div>
          {/if}
        </div>
      </svelte:fragment>
    </AccordionItem>
  {/each}
</Accordion>
