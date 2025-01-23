<script lang="ts">
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
  import { alignmentStore, createAlignment, type Alignment } from '$lib/models/Alignment';

  const alignments = alignmentStore();
</script>

<Accordion class="card p-4 text-token">
  {#if $alignments}
    {#each $alignments as alignment}
  <AccordionItem>
    <!-- Lead (icon or indicator) -->
    <svelte:fragment slot="lead">
      <i class="fa-solid fa-circle-info text-xl w-6 text-center"></i>
    </svelte:fragment>

    <!-- Summary (title of the alignment) -->
    <svelte:fragment slot="summary">
      <p class="font-bold">{alignment.title}</p>
    </svelte:fragment>

    <!-- Content (editable fields) -->
    <svelte:fragment slot="content">
      <div class="space-y-4">
        <!-- Editable field: Description -->
        <div>
          <label for="description-{alignment.uuid}" class="text-sm text-secondary">Description:</label>
          <input
            id="description-{alignment.uuid}"
            type="text"
            class="mt-1 w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-primary focus:border-primary"
            bind:value={alignment.description}
          />
        </div>

        <!-- Editable field: Desire -->
        <div>
            <label for="desire-{alignment.uuid}" class="text-sm text-secondary">Desire:</label>
            <input
            id="desire-{alignment.uuid}"
            type="text"
            class="mt-1 w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-primary focus:border-primary"
            bind:value={alignment.desire}
            />
        </div>

        <!-- Editable field: Question -->
        <div>
          <label for="question-{alignment.uuid}" class="text-sm text-secondary">Question:</label>
          <input
            id="question-{alignment.uuid}"
            type="text"
            class="mt-1 w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-primary focus:border-primary"
            value={alignment.question}
            bind:value={alignment.question}
          />
        </div>

        <!-- Editable field: Is Archived -->
        <div>
          <label for="archived-{alignment.uuid}" class="text-sm text-secondary">Archived:</label>
          <input
            id="archived-{alignment.uuid}"
            type="checkbox"
            class="ml-2"
            bind:checked={alignment.isArchived}
          />
        </div>

        <!-- Timestamps (non-editable) -->
        <div class="text-xs text-secondary-content mt-4">
          <p>Created At: {alignment.createdAt.toLocaleDateString()}</p>
          <p>Updated At: {alignment.updatedAt.toLocaleDateString()}</p>
        </div>
      </div>
    </svelte:fragment>
  </AccordionItem>
    {/each}
  {/if}
</Accordion>
