<script lang="ts">
    import {BottomSheet} from 'svelte-bottom-sheet';
</script>

<BottomSheet settings={{maxHeight: 0.7}} >
 <BottomSheet.Trigger>
    <p>Open the sheet</p>
    <p>Open the sheet</p>  
    <p>Open the sheet</p>
    <p>Open the sheet</p>
    <p>Open the sheet</p> 

 </BottomSheet.Trigger>
 <BottomSheet.Overlay style="background-color:red;max-width:500px;margin:auto">
    <BottomSheet.Sheet style="background-color:green;max-width:500px">
       <BottomSheet.Handle style="background-color:green;" >
       
         </BottomSheet.Handle>
       <BottomSheet.Content style="background-color:green">
          <h3>Content inside the bottom sheet</h3>
          <p>Here you can put any content you need.</p>
       </BottomSheet.Content>
    </BottomSheet.Sheet>
 </BottomSheet.Overlay>

</BottomSheet>